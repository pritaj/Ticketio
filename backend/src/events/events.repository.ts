import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class EventsRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    const events = await this.prisma.event.findMany({
      include: {
        venue: true,
      },
    });

    return events;
  }

  async findOne(id: number) {
    const event = await this.prisma.event.findUnique({
      where: {
        id: id,
      },
      include: {
        venue: true,
      },
    });
    return event;
  }
}
