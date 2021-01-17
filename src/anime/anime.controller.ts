import { Controller, Get, Query } from '@nestjs/common';
import * as needle from 'needle';
import { IanimeQuote } from './animeInterface/IanimeInterface';


@Controller('anime')
export class AnimeController {
    @Get(':anime')
    async getAnimeQuote(@Query('anime') anime: string): Promise<IanimeQuote[]> {
        const res = await needle('get', `https://animechanapi.xyz/api/quotes?anime=${anime}`);
        const quote = res.body.data;
        return quote;
    }


}
