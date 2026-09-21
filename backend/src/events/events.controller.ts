import { Controller, Get, NotFoundException, Param } from '@nestjs/common';
import { EventsService } from './events.service';

@Controller('api/events')
export class EventsController {
  constructor(private readonly eventsService: EventsService) {}

  @Get()
  async findAll() {
    const events = await this.eventsService.findAll();
    return events;
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const event = await this.eventsService.findOne(Number(id));
    if (!event) {
      throw new NotFoundException(`Nincs ilyen esemény: ${id}`);
    }
    return event;
  }
}
