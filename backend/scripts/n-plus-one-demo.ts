import 'dotenv/config';
import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '../src/generated/prisma/client';

const pool = new Pool({ connectionString: process.env['DATABASE_URL'] });
const adapter = new PrismaPg(pool);

// A `log: ['query']` opció kiírja a konzolra minden lefutott SQL lekérdezést
const prisma = new PrismaClient({ adapter, log: ['query'] });

async function naiveApproach() {
  console.log('\n=== NAIV MEGOLDÁS ===\n');
  const events = await prisma.event.findMany();
  for (const event of events) {
    await prisma.venue.findUnique({ where: { id: event.venueId } });
  }
}

async function optimizedApproach() {
  console.log('\n=== OPTIMALIZÁLT MEGOLDÁS ===\n');
  await prisma.event.findMany({
    include: {
      venue: true,
    },
  });
}

async function main() {
  await naiveApproach();
  await optimizedApproach();
}

main()
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
