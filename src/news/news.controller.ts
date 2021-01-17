import { Controller, Get, Query } from '@nestjs/common';
import * as needle from 'needle';
import { INewsItem } from 'src/interfaces/INewsItem.interface';

@Controller('news')
export class NewsController {
  @Get()
  async findNews(@Query('tag') tag: string): Promise<INewsItem[]> {
    // let cachedData;
    // let cachedTime;
    // if (cachedTime && cachedTime > Date.now() - 60 * 1000) {
    //   return cachedData;
    // }
    const res = await needle(
      'get',
      `https://api.currentsapi.services/v1/search?&apiKey=w6d7BYcr6Zo21xVnD-EdilkhLr5TSeevsYAS51zImPXcSjX-`,
      {
        query: {
          keywords: tag
        }
      }
    );
    const news: INewsItem[] = res.body.news as INewsItem[];
    // cachedData = news;
    // cachedTime = Date.now();
    //news.forEach((item) => {
    //console.log(`${item.title}:  ${item.author}`);
    console.log(news[0].description)

    //});
    return news;
  }
}
