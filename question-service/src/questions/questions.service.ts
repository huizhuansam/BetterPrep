import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateQuestionDto } from './dto/create-question.dto';
import { Question } from './schemas/question.schema';

@Injectable()
export class QuestionsService {
  constructor(
    @InjectModel(Question.name) private questionModel: Model<Question>,
  ) {}

  async create(createQuestionDto: CreateQuestionDto): Promise<Question> {
    // create url id
    const urlId = createQuestionDto.title
      .trim()
      .toLowerCase()
      .split(/(\s+)/)
      .filter((s) => !s.match(/(\s+)/))
      .join('-');
    const createdQuestion = new this.questionModel({
      ...createQuestionDto,
      urlId,
    });
    return createdQuestion.save();
  }

  async findAll(): Promise<Question[]> {
    return this.questionModel.find().exec();
  }

  async findOne(urlId: string): Promise<Question | null> {
    return this.questionModel.findOne({ urlId }).exec();
  }
}
