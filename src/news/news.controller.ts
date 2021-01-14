import { Controller, Get, Query } from '@nestjs/common';
import * as needle from 'needle';
import { INewsItem } from 'src/interfaces/INewsItem.interface';

@Controller('news')
export class NewsController {
  @Get()
  async findNews(@Query('tag') tag: string): Promise<INewsItem[]> {
    const res = await needle(
      'get',
      `https://api.currentsapi.services/v1/search?keywords=${tag}&apiKey=w6d7BYcr6Zo21xVnD-EdilkhLr5TSeevsYAS51zImPXcSjX-`,
    );
    const news: INewsItem[] = res.body.news as INewsItem[];
    news.forEach((item) => {
      console.log(`${item.title}:  ${item.author}`);
    });
    return news;
  }
}
