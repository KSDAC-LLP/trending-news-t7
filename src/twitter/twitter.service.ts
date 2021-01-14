import { Injectable } from '@nestjs/common';
import * as twitter from 'twitter';

@Injectable()
export class TwitterService {
  private client: any;

  constructor() {
    this.client = new twitter({
      consumer_key: 'B0hhLiPWkJ5bH00FLBQFRymKr',
      consumer_secret: 'OEKlj5cmX2tmhbUwvT8cfiOTPr4RnWrdFN5gTvGshpaCf43Zf8',
      access_token_key: '4016086743-e4zgGKnmFM5mEuGN8FqhrhMkd3Pik8S1ZNa0llb',
      access_token_secret: 'j2iXmlWFdA92TY6BCf8e9JrvoqlfzEeE1l6bczFhcGAYC',
    });
  }

  findTrends(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.client.get('trends/available', function (error: any, tweets: any) {
        if (error) return reject(error);
        resolve(tweets);
      });
    });
  }
}
