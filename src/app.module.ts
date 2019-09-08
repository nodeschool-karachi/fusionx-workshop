import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DataController } from './Controllers/data/data.controller';

@Module({
  imports: [],
  controllers: [AppController, DataController],
  providers: [AppService],
})
export class AppModule { }
