import { Injectable } from '@nestjs/common';
import { EventsRepository } from './events.repository';

@Injectable()
export class EventsService {
  constructor(private readonly evr: EventsRepository) {}

  async findAll() {
    const events = await this.evr.findAll();
    return events;
  }

  async findOne(id: number) {
    const event = await this.evr.findOne(id);
    return event;
  }
}
