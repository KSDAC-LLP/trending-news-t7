import { Controller, Get, Query } from '@nestjs/common';
import * as needle from 'needle';
import { IanimeQuote } from 'src/anime/animeInterface/IanimeInterface';


@Controller('animeChar')
export class AnimeCharController {
    @Get(':char')
    async getAnimeCharacterQuote(@Query('char') char: string): Promise<IanimeQuote[]> {
        const response = await needle('get', `https://animechanapi.xyz/api/quotes?char=${char}`);
        const quotes = response.body.data;
        return quotes;
    }
}
