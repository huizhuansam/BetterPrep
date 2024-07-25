import { Test, TestingModule } from '@nestjs/testing';
import { QuestionsController } from '../questions.controller';
import { QuestionsService } from '../questions.service';
import { Question } from '../schemas/question.schema';
import { questionStub } from './stubs/question.stub';
import { CreateQuestionDto } from '../dto/create-question.dto';

jest.mock('../questions.service');

describe('QuestionsController', () => {
  let questionsService: QuestionsService;
  let questionsController: QuestionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      controllers: [QuestionsController],
      providers: [QuestionsService],
    }).compile();
    questionsController = module.get<QuestionsController>(QuestionsController);
    questionsService = module.get<QuestionsService>(QuestionsService);
    jest.clearAllMocks();
  });

  describe('create', () => {
    describe('when create is called', () => {
      let question: Question;
      let createQuestionDto: CreateQuestionDto;

      beforeEach(async () => {
        createQuestionDto = {
          title: questionStub().title,
          description: questionStub().description,
          complexity: questionStub().complexity,
          categories: questionStub().categories,
        };
        question = await questionsController.create(createQuestionDto);
      });

      test('then it should call questionsService', () => {
        expect(questionsService.create).toHaveBeenCalledWith(createQuestionDto);
      });

      test('then it should return a question', () => {
        expect(question).toEqual(questionStub());
      });
    });
  });

  describe('findOne', () => {
    describe('when findOne is called', () => {
      let question: Question;

      beforeEach(async () => {
        question = await questionsController.findOne(questionStub().slug);
      });

      test('then it should call questionsService', () => {
        expect(questionsService.findOne).toHaveBeenCalledWith(
          questionStub().slug,
        );
      });

      test('then it should return a question', () => {
        expect(question).toEqual(questionStub());
      });
    });
  });

  describe('findAll', () => {
    describe('when findAll is called', () => {
      let questions: Question[];

      beforeEach(async () => {
        questions = await questionsController.findAll();
      });

      test('then it should call questionsService', () => {
        expect(questionsService.findAll).toHaveBeenCalled();
      });

      test('then it should return an array of questions', () => {
        expect(questions).toEqual([questionStub()]);
      });
    });
  });
});
