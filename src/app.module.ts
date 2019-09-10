import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

// remove RandomController import
import { RandomController } from './random/random.controller';
// remove RandomService import
import { RandomService } from './random/random.service';

// uncomment the line below
// import { RandomModule } from './random/random.module';

@Module({
  imports: [
    // uncomment the line below
    // RandomModule,
  ],
  controllers: [
    AppController,
    // remove RandomController entry
    RandomController,
  ],
  providers: [
    AppService,
    // remove RandomService entry
    RandomService,
  ],
})
export class AppModule {}
