import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RandomController } from './random/random.controller';

// uncomment the line below
import { RandomService } from './random/random.service';

@Module({
  imports: [],
  controllers: [
    AppController,
    RandomController,
  ],
  providers: [
    AppService,
    // uncomment the line below
    // RandomService,
  ],
})
export class AppModule {}
