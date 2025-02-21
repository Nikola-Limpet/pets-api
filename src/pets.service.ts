import { Injectable } from '@nestjs/common';
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
    return this.petsRepository.find();
  }

  findOne(id: string): Promise<Pet> {
    return this.petsRepository.findOne({ where: { id }, relations: ['images'] });
  }
  async create(createPetDto: CreatePetDto): Promise<Pet> {
    const pet = this.petsRepository.create({
      ...createPetDto,
      images: createPetDto.images.map((url, index) => ({
        url,
        order: index + 1
      }))
    });
    return this.petsRepository.save(pet);
  }
}