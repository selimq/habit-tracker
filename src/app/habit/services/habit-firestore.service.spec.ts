import { TestBed } from '@angular/core/testing';

import { HabitFirestoreService } from './habit-firestore.service';

describe('HabitFirestoreService', () => {
  let service: HabitFirestoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HabitFirestoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
