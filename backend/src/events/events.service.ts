import { Injectable } from '@nestjs/common';
import { Event } from './event.model';

@Injectable()
export class EventsService {
  private events: Event[] = [
    {
      id: 1,
      title: 'Beton Hofi - BudapestPark',
      description: 'Beton Hofi koncert lesz a BudapestParkban!',
      city: 'Budapest',
      startsAt: '2026-08-22T19:00:00Z',
      capacity: 120,
    },
    {
      id: 2,
      title: 'Dzsúdló - BudapestPark',
      description: 'Dzsúdló koncert lesz a BudapestParkban!',
      city: 'Budapest',
      startsAt: '2026-09-22T19:00:00Z',
      capacity: 120,
    },
    {
      id: 3,
      title: 'Workshop - Kerámia',
      description: 'Kerámia készítés',
      city: 'Budapest',
      startsAt: '2026-03-22T11:00:00Z',
      capacity: 12,
    },
    {
      id: 4,
      title: 'Workshop - Nyaklánc',
      description: 'Nyaklánc készítés',
      city: 'Székesfehérvár',
      startsAt: '2026-05-04T11:00:00Z',
      capacity: 20,
    },
    {
      id: 5,
      title: 'Dzsúdló - Ápoló Klub',
      description: 'Dzsúdló koncert lesz a Ápoló Klubban!',
      city: 'Kecskemét',
      startsAt: '2026-06-15T19:00:00Z',
      capacity: 100,
    },
    {
      id: 6,
      title: 'Dzsúdló - MWM Domb',
      description: 'Dzsúdló koncert lesz a MVM Dombon!',
      city: 'Budapest',
      startsAt: '2026-11-29T20:00:00Z',
      capacity: 500,
    },
    {
      id: 7,
      title: 'Kecskemét - Színház - Bábel',
      description: 'Színházi előadás Kecskeméten - Bábel',
      city: 'Kecskemét',
      startsAt: '2026-03-01T15:30:00Z',
      capacity: 100,
    },
  ];

  findAll(): Event[] {
    return this.events;
  }

  findOne(id: number): Event | undefined {
    return this.events.find((event) => event.id === id);
  }
}
