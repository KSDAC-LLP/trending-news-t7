import { Controller, Get } from '@nestjs/common';
import { TwitterService } from './twitter.service';
import { User } from './interface/twitter.interfaces';


@Controller('twitter')

export class TwitterController {
    constructor(private twitterService: TwitterService) { }
    @Get()
    findTrends() {
        return this.twitterService.findTrends();
    }
}
