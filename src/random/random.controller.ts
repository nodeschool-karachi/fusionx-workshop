import { Controller, Get, Res, HttpStatus } from '@nestjs/common';
import { Response } from 'express';
import { RandomData } from 'src/models/random-data';

// uncomment the line below
// import { RandomService } from './random.service';

@Controller('random')
export class RandomController {

  // uncomment the line below
  // constructor(private readonly randomService: RandomService) {}

  @Get()
  getRandomData(@Res() response: Response) {
    let randomData: RandomData;

    // uncomment the line below
    // randomData =  this.randomService.getRandomData();
    response.status(HttpStatus.OK).json(randomData);
  }
}
