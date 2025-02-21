import { IsString, IsInt, IsUrl, IsBoolean, IsArray } from 'class-validator';

export class CreatePetDto {
  @IsString()
  name: string;

  @IsString()
  breed: string;

  @IsInt()
  age: number;

  @IsUrl()
  image: string;

  @IsArray()
  @IsUrl({}, { each: true })
  images: string[];

  @IsBoolean()
  isAdopted: boolean;

  @IsString()
  color: string;

  @IsString()
  description: string;

  @IsString()
  category: string;
}