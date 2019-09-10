import { Controller, Get } from '@nestjs/common';
import { getData } from '../../Mock-Data/sample-mock-method';

@Controller('data')
export class DataController {
  // constructor() { }
  @Get()
  async findAll(): Promise<any[]> {
    return getData();
  }
}
