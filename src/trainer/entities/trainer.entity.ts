import { CapturedPoke } from 'src/captured-poke/entities/captured-poke.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'trainer' })
export class Trainer {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  hometown: string;

  @OneToMany(() => CapturedPoke, (CapturedPoke) => CapturedPoke.trainer, {
    cascade: true,
    nullable: true,
  })
  cap_poke: [CapturedPoke];
}
