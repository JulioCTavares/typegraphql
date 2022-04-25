import { Field, ID, ObjectType } from 'type-graphql';
import { randomUUID as uuid } from 'node:crypto';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tasks')
@ObjectType()
export default class Task {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => ID, { nullable: true })
  id: string;

  @Column()
  @Field(() => String, { nullable: false })
  title: string;

  @Column()
  @Field(() => String, { nullable: false })
  description: string;

  @Column()
  @Field(() => Boolean, { nullable: true, name: "completed" })
  is_complete: boolean

  @Column()
  @Field(() => Date, { nullable: true })
  created_at: Date

  @Column()
  @Field(() => Date, { nullable: true  })
  updated_at: Date

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}