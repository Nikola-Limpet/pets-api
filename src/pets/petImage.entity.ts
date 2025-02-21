import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Pet } from './pet.entity';

@Entity()
export class PetImage {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  url: string;

  @Column()
  order: number;

  @ManyToOne(() => Pet, pet => pet.images)
  pet: Pet;
}