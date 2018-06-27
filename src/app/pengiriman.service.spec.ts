import { TestBed, inject } from '@angular/core/testing';

import { PengirimanService } from './pengiriman.service';

describe('PengirimanService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PengirimanService]
    });
  });

  it('should be created', inject([PengirimanService], (service: PengirimanService) => {
    expect(service).toBeTruthy();
  }));
});
