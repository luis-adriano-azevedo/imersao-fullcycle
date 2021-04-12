import { Injectable } from '@nestjs/common';
import { Routes } from './entities/Routes';

@Injectable()
export class AppService {
  private routes: Routes[] = [
    {
      title: '1',
      startPosition: {
        lat: -11.111,
        long: 11.111,
      },
      endPosition: {
        lat: -22.222,
        long: 22.222,
      },
    },
    {
      title: '2',
      startPosition: {
        lat: -33.333,
        long: 33.333,
      },
      endPosition: {
        lat: -44.444,
        long: 44.444,
      },
    },
    {
      title: '3',
      startPosition: {
        lat: -55.555,
        long: 55.555,
      },
      endPosition: {
        lat: -66.666,
        long: 66.666,
      },
    },
    {
      title: '4',
      startPosition: {
        lat: -77.777,
        long: 77.777,
      },
      endPosition: {
        lat: -88.888,
        long: 88.888,
      },
    },
    {
      title: '5',
      startPosition: {
        lat: -99.999,
        long: 99.999,
      },
      endPosition: {
        lat: -100.00,
        long: 100.00
      },
    },
  ];

  async getRoutes() {
      return this.routes
  }
}

