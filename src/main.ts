import { NestFactory } from '@nestjs/core';
import { AppModule } from './pets.module';
import { ConfigService } from '@nestjs/config';
import { SeedService } from './seed/seed.service';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const seedService = app.get(SeedService);
  await seedService.seed();

  app.enableCors({
    origin: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });

  app.useGlobalPipes(new ValidationPipe());

  const port = configService.get('PORT') || 3000;
  await app.listen(port, '0.0.0.0'); // Listen on all network interfaces
}
bootstrap();
