import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { PetImage } from './petImage.entity';

@Entity()
export class Pet {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  breed: string;

  @Column()
  age: number;

  @Column()
  image: string;

  @OneToMany(() => PetImage, image => image.pet, {
    cascade: true,
    eager: true,
  })
  images: PetImage[];

  @Column()
  isAdopted: boolean;

  @Column()
  color: string;

  @Column()
  description: string;

  @Column()
  category: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updated_at: Date;
}