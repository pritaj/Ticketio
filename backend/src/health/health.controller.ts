import { Controller, Get } from '@nestjs/common';

const APP_VERSION = '0.1.0';

@Controller('api/health')
export class HealthController {
  @Get()
  getHealth() {
    return {
      status: 'ok',
      version: APP_VERSION,
    };
  }
}
