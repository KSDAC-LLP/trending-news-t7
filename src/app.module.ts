import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TwitterModule } from './twitter/twitter.module';
import { NewsController } from './news/news.controller';
import { WeatherController } from './weather/weather.controller';
import { AnimeController } from './anime/anime.controller';
import { AnimeCharController } from './animeChar/animeChar.controller';

@Module({
  imports: [TwitterModule],
  controllers: [AppController, NewsController, WeatherController, AnimeController, AnimeCharController],
  providers: [AppService],
})
export class AppModule { }
