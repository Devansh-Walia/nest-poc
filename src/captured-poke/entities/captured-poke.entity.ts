import { Pokemon } from 'src/pokemon/entities/pokemon.entity';
import { Trainer } from 'src/trainer/entities/trainer.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'capturedpoke' })
export class CapturedPoke {
  @PrimaryGeneratedColumn()
  id: string;

  @ManyToOne(() => Pokemon, (Pokemon) => Pokemon.cap_poke, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'poke_id' })
  poke: Pokemon;

  @ManyToOne(() => Trainer, (Trainer) => Trainer.cap_poke, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'trainer_id' })
  trainer: Trainer;

  @Column({ type: 'numeric', default: 1 })
  count: number;
}
