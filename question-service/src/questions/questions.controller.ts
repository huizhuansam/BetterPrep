import {
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Req,
} from '@nestjs/common';
import { Request } from 'express';

@Controller('questions')
export class QuestionsController {
  @Post()
  create(): string {
    return 'This action adds a new cat';
  }

  @Get()
  findAll(@Req() request: Request): Array<any> {
    return [
      {
        title: 'Two Sum',
        description: `Given an array of integers nums and an integer target, return
         indices of the two numbers such that they add up to target. You may assume 
         that each input would have exactly one solution, and you may not use the 
         same element twice. You can return the answer in any order.`,
        categories: ['array', 'hash table'],
        complexity: 'easy',
      },
      {
        title: 'Add Two Numbers',
        description: `You are given two non-empty linked lists representing two
         non-negative integers. The digits are stored in reverse order, and each 
         of their nodes contains a single digit. Add the two numbers and return 
         the sum as a linked list. You may assume the two numbers do not contain 
         any leading zero, except the number 0 itself.`,
        categories: ['linked list', 'math', 'recursion'],
        complexity: 'medium',
      },
    ];
  }

  @Get(':id')
  findOne(@Param('id') id: string): string {
    return `This action returns a #${id} question`;
  }

  @Patch(':id')
  updateOne(@Req() request: Request, @Param('id') id: string): string {
    return `This action updates a question`;
  }

  @Delete(':id')
  deleteOne(@Param('id') id: string): string {
    return `This action deletes a question`;
  }
}
