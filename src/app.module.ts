import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TwitterController } from './twitter/twitter.controller';
import { TwitterService } from './twitter/twitter.service';
import { TwitterModule } from './twitter/twitter.module';

@Module({
  imports: [TwitterModule],
  controllers: [AppController, TwitterController],
  providers: [AppService, TwitterService],
})
export class AppModule {}
