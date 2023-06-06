import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'trainer' })
export class Trainer {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  hometown: string;
}
