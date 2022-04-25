import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { randomUUID as uuid } from 'node:crypto';
import { Field, ObjectType } from 'type-graphql';

@Entity('tasks')
@ObjectType()
export default class Task {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String)
  id: string;

  @Column()
  @Field(() => String)
  title: string;

  @Column()
  @Field(() => String)
  description: string;

  @Column()
  @Field(() => Boolean)
  is_complete: boolean

  @Column()
  @Field(() => Date)
  created_at: Date

  @Column()
  @Field(() => Date)
  updated_at: Date

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}