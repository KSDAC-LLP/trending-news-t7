import { Controller, Get } from '@nestjs/common';
import { TwitterService } from './twitter.service';

@Controller('twitter')
export class TwitterController {
  constructor(private twitterService: TwitterService) {}
  @Get()
  async findTrends() {
    return this.twitterService.findTrends();
  }
}
