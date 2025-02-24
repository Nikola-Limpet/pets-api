import { Command } from 'nestjs-command';
import { Injectable } from '@nestjs/common';
import { SeedService } from './seed/seed.service';

@Injectable()
export class SeedCommand {
  constructor(private readonly seedService: SeedService) { }

  @Command({
    command: 'seed',
    describe: 'Seed the database with initial data',
  })
  async seed() {
    await this.seedService.seed();
  }
}