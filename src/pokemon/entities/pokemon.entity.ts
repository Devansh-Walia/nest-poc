import { CapturedPoke } from 'src/captured-poke/entities/captured-poke.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

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

  @OneToMany(() => CapturedPoke, (CapturedPoke) => CapturedPoke.poke, {
    cascade: true,
    nullable: true,
  })
  cap_poke: [CapturedPoke];
}
