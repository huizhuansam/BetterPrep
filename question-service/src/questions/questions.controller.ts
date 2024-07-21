import {
  Body,
  Controller,
  Get,
  Post,
  UseFilters,
  ValidationPipe,
} from '@nestjs/common';
import { CreateQuestionDto } from './dto/create-question.dto';
import { MongoExceptionFilter } from './mongo-exception.filter';
import { QuestionsService } from './questions.service';
import { Question } from './schemas/question.schema';

@Controller('questions')
export class QuestionsController {
  constructor(private readonly questionsService: QuestionsService) {}

  @Post()
  @UseFilters(MongoExceptionFilter)
  async create(@Body(ValidationPipe) createQuestionDto: CreateQuestionDto) {
    return await this.questionsService.create(createQuestionDto);
  }

  @Get()
  async findAll(): Promise<Question[]> {
    return await this.questionsService.findAll();
  }
}
