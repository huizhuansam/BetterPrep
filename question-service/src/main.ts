import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // TODO: configure CORS for production
  const corsOptions = {
    origin: 'http://localhost:5173',
    methods: 'GET, POST',
  };
  app.enableCors(corsOptions);
  await app.listen(3000);
}
bootstrap();
