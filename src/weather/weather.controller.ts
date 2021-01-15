import { Controller, Get, Query } from '@nestjs/common';
import * as needle from 'needle';


@Controller('weather')
export class WeatherController {
    @Get()
    async getWeather(@Query('place') place: string) {
        const res = await needle('get',
            `api.openweathermap.org/data/2.5/weather?q=${place}&units=metric&appid=8e65a9a03e7cf6e7b2f52b3599de6a4c`);
        const weather = res.body.main.temp;
        return `it's currently ${weather} Celsius in ${place}`;
    }
}
