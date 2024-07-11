import { Module } from '@nestjs/common';
import { QuestionsController } from './questions/questions.controller';
import { QuestionsService } from './questions/questions.service';

@Module({
  imports: [],
  controllers: [QuestionsController],
  providers: [QuestionsService],
})
export class AppModule {}
