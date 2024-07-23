import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { QuestionsModule } from './questions/questions.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      process.env.MONGO_CONNECTION_STRING || 'http://localhost:27017/',
    ),
    QuestionsModule,
  ],
})
export class AppModule {}
