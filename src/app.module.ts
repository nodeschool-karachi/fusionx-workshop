import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { RandomController } from './random/random.controller';

@Module({
  imports: [],
  controllers: [
    AppController,
    // RandomController,
  ],
  providers: [AppService],
})
export class AppModule {}
