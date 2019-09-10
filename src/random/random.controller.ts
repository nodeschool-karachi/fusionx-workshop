import { Controller, Get, Res, HttpStatus } from '@nestjs/common';
import { Response } from 'express';
import { RandomData } from 'src/models/random-data';
import { RandomService } from './random.service';

@Controller('random')
export class RandomController {

  constructor(private readonly randomService: RandomService) {}

  @Get()
  getRandomData(@Res() response: Response) {
    let randomData: RandomData;
    randomData =  this.randomService.getRandomData();
    response.status(HttpStatus.OK).json(randomData);
  }
}
