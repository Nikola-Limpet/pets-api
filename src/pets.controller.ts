import { Body, Controller, Get, NotFoundException, Param, Patch, Post, ValidationPipe } from '@nestjs/common';
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

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Pet> {
    try {
      return await this.petsService.findOne(id);
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new NotFoundException(`Could not find pet with ID ${id}`);
    }
  }

  // update the isAdopted property of a pet 
  @Post(':id/adopt')
  async adoptPet(@Param('id') id: string): Promise<Pet> {
    try {
      return await this.petsService.adoptPet(id);
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new NotFoundException(`Could not find pet with ID ${id}`);
    }
  }



}