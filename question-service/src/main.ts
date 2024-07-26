import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // TODO: configure CORS for production
  const corsOptions = {
    // docker mode: allow from locally running api gateway
    // local mode: allow from frontend
    origin: process.env.API_GATEWAY_HOSTNAME || 'http://localhost:5173',
    methods: 'GET, POST',
  };
  console.log(corsOptions);
  app.enableCors(corsOptions);
  await app.listen(3000);
}
bootstrap();
