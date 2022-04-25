import Task from "../database/entities/Task";
import { Arg, Mutation, Query, Resolver } from "type-graphql";
import {getRepository, Repository} from "typeorm";


@Resolver()
export class TaskResolver {

  private taskRepository: Repository<Task>

  constructor() {
    this.taskRepository = getRepository(Task);
  }

  @Query(() => String)
  hello(): string {
    return "hello world!!";
  }

  @Query(() => [Task], {name: 'findAll'})
  async find(): Promise<Task[]> {
    const tasks = await this.taskRepository.find();

    return tasks
  }

  @Query(() => Task, {name: 'findTask'})
  async findById(
    @Arg("id") id: string
  ): Promise<Task | undefined> {
    const task = await this.taskRepository.findOne(id);

    return task;
  }

  @Mutation(() => Task, {name: 'createTask'})
  async create(
    @Arg('title') title: string,
    @Arg('description') description: string
  ): Promise<Task> {
    const task = this.taskRepository.create({title, description, is_complete: false});

    await this.taskRepository.save(task)

    return task
  }

  @Mutation(() => Boolean, {name: "deleteTaskById"})
  delete(
    @Arg('id') id: string
  ): boolean {
    
    try {
      this.taskRepository.delete({id})
      return true;
    } catch {
      return false
    }
  }

  @Mutation(() => Boolean, {name:"updateStatus"})
  async updateStatus(
    @Arg('id') id: string,
  ): Promise<boolean> {
    const task = await this.taskRepository.findOne(id);

    if (!task) {
      throw new Error ("Task not found")
    }
    try {
      await this.taskRepository.update({id}, {is_complete: !task.is_complete});
      return true
    } catch {
      return false
    }

  }
  
}