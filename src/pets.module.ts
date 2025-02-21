import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pet } from './pets/pet.entity';
import { PetImage } from './pets/petImage.entity';
import { SeedService } from './seed/seed.service';
import { PetsController } from './pets.controller';
import { PetsService } from './pets.service';



@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        url: configService.get('DATABASE_URL'),
        entities: [Pet, PetImage],
        synchronize: true,
        ssl: true,
        extra: {
          ssl: {
            rejectUnauthorized: false
          }
        }
      }),
      inject: [ConfigService],
    }),
    TypeOrmModule.forFeature([Pet, PetImage])
  ],
  controllers: [PetsController],
  providers: [PetsService, SeedService],
})
export class AppModule { }