import { Controller, Get, NotFoundException, Param } from '@nestjs/common';
import { EventsService } from './events.service';

@Controller('api/events')
export class EventsController {
  constructor(private readonly eventsService: EventsService) {}

  @Get()
  findAll() {
    return this.eventsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    const event = this.eventsService.findOne(Number(id));
    if (!event) {
      throw new NotFoundException(`Nincs ilyen esemény: ${id}`);
    }
    return event;
  }
}
