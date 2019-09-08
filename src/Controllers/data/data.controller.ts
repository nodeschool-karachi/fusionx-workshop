import { Controller, Get } from '@nestjs/common';

@Controller('data')
export class DataController {
  @Get()
  findAll() {
    return 'Dummy';
  }
}
