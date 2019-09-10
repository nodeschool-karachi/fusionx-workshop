import { Controller, Get, Res, HttpStatus } from '@nestjs/common';
// import { Response } from 'express';
// import { Random } from 'mockjs';
// import { RandomData } from 'src/models/random-data';

@Controller('random')
export class RandomController {

  // @Get()
  // getRandomData(@Res() response: Response) {
  //   const title = Random.name();
  //   const initials = title.match(/\b\w/g) || [];
  //   const name = ((initials.shift() || '') + (initials.pop() || '')).toUpperCase();
  // ​
  //   const randomData: RandomData = {
  //     name: title,
  //     image: Random.image('200x100', Random.color(), '#FFF', 'png', name),
  //     message: Random.sentence(5),
  //   };
  //   response.status(HttpStatus.OK).json(randomData) ;
  // }
}
