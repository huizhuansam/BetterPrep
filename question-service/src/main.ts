import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // TODO: configure CORS for production
  const corsOptions = {
    origin: process.env.FRONTEND_SERVICE_CONNECTION_STRING,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
  };
  app.enableCors(corsOptions);
  await app.listen(3000);
}
bootstrap();
