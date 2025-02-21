import { Body, Controller, Get, Post, ValidationPipe } from '@nestjs/common';
import { PetsService } from './pets.service';
import { Pet } from './pets/pet.entity';
import { CreatePetDto } from './pets/pet.dto';

@Controller('pets')
export class PetsController {
  constructor(private readonly petsService: PetsService) { }

  @Get()
  findAll(): Promise<Pet[]> {
    return this.petsService.findAll();
  }

  @Post()
  create(@Body(new ValidationPipe()) pet: CreatePetDto): Promise<Pet> {
    return this.petsService.create(pet);
  }

}