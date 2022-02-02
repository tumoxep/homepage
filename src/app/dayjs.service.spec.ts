import { TestBed } from '@angular/core/testing';

import { DayjsService } from './dayjs.service';

describe('DayjsService', () => {
  let service: DayjsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DayjsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
