import { Injectable } from '@nestjs/common';
import { EventsRepository } from './events.repository';
import { EventResponseDto } from './dto/event-response.dto';

@Injectable()
export class EventsService {
  constructor(private readonly evr: EventsRepository) {}

  async findAll() {
    const events = await this.evr.findAll();
    const dtos = events.map((event) => EventResponseDto.fromEntity(event));
    return dtos;
  }

  async findOne(id: number) {
    const event = await this.evr.findOne(id);
    if (!event) {
      return null;
    }
    const dto = EventResponseDto.fromEntity(event);
    return dto;
  }
}
