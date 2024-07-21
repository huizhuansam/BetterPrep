import { Body, Controller, Get, Post, ValidationPipe } from '@nestjs/common';
import { Question } from './schemas/question.schema';
import { QuestionsService } from './questions.service';
import { CreateQuestionDto } from './dto/create-question.dto';

@Controller('questions')
export class QuestionsController {
  constructor(private readonly questionsService: QuestionsService) {}

  @Post()
  async create(@Body(ValidationPipe) createQuestionDto: CreateQuestionDto) {
    return await this.questionsService.create(createQuestionDto);
  }

  @Get()
  async findAll(): Promise<Question[]> {
    return await this.questionsService.findAll();
  }
}
