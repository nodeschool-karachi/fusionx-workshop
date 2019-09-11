import {
  Module,
  // uncomment the module import below
  // NestModule,
  // uncomment the module import below
  // MiddlewareConsumer,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RandomModule } from './random/random.module';

// uncomment the LoggerMiddleWare import below
// import { LoggerMiddleware } from './common/middleware/logger.midleware';

// uncomment the RandomController import below
// import { RandomController } from './random/random.controller';

@Module({
  imports: [
    RandomModule,
  ],
  controllers: [
    AppController,
  ],
  providers: [
    AppService,
  ],
})
export class AppModule /* implements NestModule */ {

  // uncomment the code chunk below
  // configure(consumer: MiddlewareConsumer) {
  //   consumer
  //     .apply(LoggerMiddleware)
  //     .forRoutes(RandomController);
  // }
}
