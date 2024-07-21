import { Test, TestingModule } from '@nestjs/testing';
// import { CreateQuestionDto } from './dto/create-question.dto';
import { QuestionsController } from './questions.controller';
import { QuestionsService } from './questions.service';
// import { Question } from './schemas/question.schema';

describe('QuestionsController', () => {
  let questionsService: QuestionsService;
  let questionsController: QuestionsController;

  // const createQuestionDto: CreateQuestionDto = {
  //   title: 'Title 1',
  //   description: 'Description 1',
  //   complexity: 'easy',
  //   categories: ['stack'],
  // };

  // const mockQuestion = {
  //   title: 'Title 1',
  //   description: 'Description 1',
  //   complexity: 'easy',
  //   categories: ['stack'],
  //   _id: 'an id',
  // };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [QuestionsController],
      providers: [
        {
          provide: QuestionsService,
          useValue: {
            findAll: jest.fn().mockResolvedValue([
              {
                title: 'Title 1',
                description: 'Description 1',
                category: ['array'],
                complexity: 'easy',
              },
              {
                title: 'Title 2',
                description: 'Description 2',
                category: ['stack'],
                complexity: 'medium',
              },
              {
                title: 'Title 3',
                description: 'Description 3',
                category: ['queue'],
                complexity: 'hard',
              },
            ]),
          },
        },
      ],
    }).compile();

    questionsController = module.get<QuestionsController>(QuestionsController);
    questionsService = module.get<QuestionsService>(QuestionsService);
  });

  // describe('create()', () => {
  //   it('should create a new question', async () => {
  //     const createSpy = jest
  //       .spyOn(questionsService, 'create')
  //       .mockResolvedValueOnce(mockQuestion);

  //     await questionsController.create(createQuestionDto);
  //     expect(createSpy).toHaveBeenCalledWith(createQuestionDto);
  //   });
  // });

  describe('findAll()', () => {
    it('should return an array of questions', async () => {
      expect(questionsController.findAll()).resolves.toEqual([
        {
          title: 'Title 1',
          description: 'Description 1',
          category: ['array'],
          complexity: 'easy',
        },
        {
          title: 'Title 2',
          description: 'Description 2',
          category: ['stack'],
          complexity: 'medium',
        },
        {
          title: 'Title 3',
          description: 'Description 3',
          category: ['queue'],
          complexity: 'hard',
        },
      ]);
      expect(questionsService.findAll).toHaveBeenCalled();
    });
  });
});
