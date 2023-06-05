import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'pokemon' })
export class Pokemon {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  type: string;

  @Column('text')
  description: string;
}
