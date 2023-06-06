import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'capturedpoke' })
export class CapturedPoke {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  poke_id: string;

  @Column()
  trainer_id: string;

  @Column({ type: 'numeric', default: 0 })
  count: number;
}
