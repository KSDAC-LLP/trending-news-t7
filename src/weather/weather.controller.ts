import { Controller, Get, Query } from '@nestjs/common';
import * as needle from 'needle';
import { IweatherItem } from './weatherInterface/weather.interface';


@Controller('weather')
export class WeatherController {

    @Get()
    async getWeather(@Query('place') place: string): Promise<IweatherItem> {
        const res = await needle('get',
            `api.openweathermap.org/data/2.5/weather?q=${place}&units=metric&appid=8e65a9a03e7cf6e7b2f52b3599de6a4c`);
        const weather: IweatherItem = res.body.main.temp as IweatherItem;
        return weather;




    }
}
