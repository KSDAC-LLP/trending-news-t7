import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TwitterModule } from './twitter/twitter.module';
import { NewsController } from './news/news.controller';

@Module({
  imports: [TwitterModule],
  controllers: [AppController, NewsController],
  providers: [AppService],
})
export class AppModule { }
