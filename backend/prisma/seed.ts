import 'dotenv/config';
import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '../src/generated/prisma/client';
import { faker } from '@faker-js/faker';

const pool = new Pool({ connectionString: process.env['DATABASE_URL'] });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
  // TODO: ide jön a tényleges adatgenerálás:
  // 1) néhány User (organizer szerepkörrel)
  // 2) néhány Venue
  // 3) ~200 Event (organizerId/venueId hivatkozással a fentiekre)
  // 4) minden Eventhez 1-3 Ticket_type

  const user = await prisma.user.create({
    data: {
      email: 'teszt01@gmail.com',
      password_hash: 'seed-placeholder-hash',
      role: 'user',
    },
  });

  const venue = await prisma.venue.create({
    data: {
      name: 'Teszt',
      address: '2000 Budapest Kenyér utca 19',
      city: 'Budapest',
      capacity: 200,
    },
  });

  for (let i = 0; i < 200; i++) {
    const startsAt = faker.date.future();
    const endAt = new Date(startsAt.getTime() + 2 * 60 * 60 * 1000);

    const event = await prisma.event.create({
      data: {
        title: faker.lorem.words(3),
        description: faker.lorem.paragraph(),
        starts_at: startsAt,
        ends_at: endAt,
        status: 'PUBLISHED',
        organizerId: user.id,
        venueId: venue.id,
      },
    });

    const ticketTypeCount = faker.number.int({ min: 1, max: 3 });

    for (let j = 0; j < ticketTypeCount; j++) {
      const ticketTypeName = faker.helpers.arrayElement(['VIP', 'Early Bird', 'Standard', 'Diák']);
      const quantityTotal = faker.number.int({ min: 15, max: 150 });
      const quantitySold = faker.number.int({ min: 0, max: quantityTotal });

      await prisma.ticket_type.create({
        data: {
          eventId: event.id,
          name: ticketTypeName,
          price_minor: faker.number.int({ min: 1500, max: 30000 }),
          quantity_total: quantityTotal,
          quantity_sold: quantitySold,
        },
      });
    }
  }
}

main()
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
