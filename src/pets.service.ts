import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pet } from './pets/pet.entity';
import { CreatePetDto } from './pets/pet.dto';

@Injectable()
export class PetsService {
  constructor(
    @InjectRepository(Pet)
    private petsRepository: Repository<Pet>,
  ) { }

  findAll(): Promise<Pet[]> {
    return this.petsRepository.find({
      relations: ['images'],
      order: {
        created_at: 'DESC'
      }
    });
  }

  async findOne(id: string): Promise<Pet> {
    const pet = await this.petsRepository.findOne({
      where: { id },
      relations: ['images'],
    });

    if (!pet) {
      throw new NotFoundException(`Pet with ID ${id} not found`);
    }

    return pet;
  }
  adoptPet(id: string): Promise<Pet> {
    return this.petsRepository.save({
      id,
      isAdopted: true,
    });
  }
}
