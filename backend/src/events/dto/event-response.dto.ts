export class EventResponseDto {
  id: number;
  title: string;
  description: string;
  startsAt: Date;
  endsAt: Date;
  status: string;
  venue: {
    id: number;
    name: string;
    address: string;
    city: string;
    capacity: number;
  };

  // TODO: Rita - írd meg itt, hogyan alakítod át a Prisma-tól kapott nyers
  // "event" objektumot (ami tartalmazza a venue-t is, mert include-oltuk)
  // egy EventResponseDto-vá. Figyelj a mezőnév-eltérésekre
  // (pl. starts_at -> startsAt).
  static fromEntity(event: any): EventResponseDto {
    const dto = new EventResponseDto();
    dto.id = event.id;
    dto.title = event.title;
    dto.description = event.description;
    dto.startsAt = event.starts_at;
    dto.endsAt = event.ends_at;
    dto.status = event.status;
    dto.venue = {
      id: event.venue.id,
      name: event.venue.name,
      address: event.venue.address,
      city: event.venue.city,
      capacity: event.venue.capacity,
    };
    return dto;
  }
}
