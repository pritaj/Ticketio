export interface Event {
  id: number;
  title: string;
  description: string;
  startsAt: string;
  endsAt: string;
  status: string;
  venue: {
    id: number;
    name: string;
    address: string;
    city: string;
    capacity: number;
  };
}
