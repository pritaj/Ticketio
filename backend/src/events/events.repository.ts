import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class EventsRepository {
  constructor(private readonly prisma: PrismaService) {}

  // TODO: Rita - írd meg itt az összes esemény lekérdezését (prisma.event...)
  async findAll() {
    const events = await this.prisma.event.findMany();

    return events;
  }

  // TODO: Rita - írd meg itt egy esemény lekérdezését id alapján
  async findOne(id: number) {
    const event = await this.prisma.event.findUnique({ where: { id: id } });
    return event;
  }
}
