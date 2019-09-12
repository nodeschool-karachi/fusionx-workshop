import {
  Module,
  NestModule,
  MiddlewareConsumer,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RandomModule } from './random/random.module';
import { LoggerMiddleware } from './common/middleware/logger.midleware';
import { RandomController } from './random/random.controller';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    RandomModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'client/public'),
    }),
  ],
  controllers: [
    AppController,
  ],
  providers: [
    AppService,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes(RandomController);
  }
}
