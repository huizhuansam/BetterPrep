import { Question } from '../../schemas/question.schema';

export const questionStub = (): Question => {
  return {
    title: 'Mock Title',
    description: 'Mock Description',
    categories: ['mock category'],
    complexity: 'easy',
    slug: 'mock-title',
  };
};
