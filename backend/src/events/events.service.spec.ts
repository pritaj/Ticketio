import { EventsService } from './events.service';

describe('EventService', () => {
  let service: EventsService;

  beforeEach(() => {
    service = new EventsService();
  });

  describe('findAll', () => {
    it('az összes hardkódolt eseményt visszaadja', () => {
      const result = service.findAll();
      expect(result).toHaveLength(7);
    });
  });

  describe('findOne', () => {
    it('vissza ad egy hardkódolt eseményt', () => {
      const result_one = service.findOne(1);
      expect(result_one).toHaveProperty('id', 1);
    });
    it('nem létező id esete', () => {
      const result_none = service.findOne(999);
      expect(result_none).toBeUndefined();
    });
  });
});
