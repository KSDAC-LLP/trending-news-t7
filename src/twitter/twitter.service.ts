import { Injectable } from '@nestjs/common';
import { config } from "dotenv";
import needle from "needle";
import * as twitter from 'twitter';

const client = new twitter({
    consumer_key: process.env.API_KEY,
    consumer_secret: process.env.API_SECRETKEY,
    access_token_key: process.env.ACCESS_TOKEN,
    access_token_secret: process.env.ACCESS_SECRETTOKEN
});

@Injectable()
export class TwitterService {
    constructor(private twitter: twitter) { }
    findTrends(): Promise<any> {
        return new Promise((resolve, reject) => {
            client.get('trends/available', function (error: any, tweets: any, response: any) {
                if (error) return reject(error);
                resolve(tweets);
            });
        });
    }

}
