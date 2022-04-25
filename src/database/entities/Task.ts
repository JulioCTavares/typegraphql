import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { randomUUID as uuid } from 'node:crypto';

@Entity('tasks')
export default class Task {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  is_complete: boolean

  @Column()
  created_at: Date

  @Column()
  updated_at: Date

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}