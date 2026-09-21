import { Module } from '@nestjs/common';
import { HealthController } from './health/health.controller';
import { EventsModule } from './events/events.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [PrismaModule, EventsModule],
  controllers: [HealthController],
})
export class AppModule {}
