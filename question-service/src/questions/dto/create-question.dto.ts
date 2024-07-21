import { IsEnum, IsNotEmpty, IsString } from 'class-validator';

export class CreateQuestionDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsEnum(['easy', 'medium', 'hard'], {
    message: 'valid question complexity required',
  })
  complexity: 'easy' | 'medium' | 'hard';
  categories: string[];
}
