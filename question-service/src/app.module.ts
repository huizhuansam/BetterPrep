import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { QuestionsModule } from './questions/questions.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://root:example@localhost:27017/'),
    QuestionsModule,
  ],
})
export class AppModule {}
