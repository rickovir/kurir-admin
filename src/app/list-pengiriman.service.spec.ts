import { TestBed, inject } from '@angular/core/testing';

import { ListPengirimanService } from './list-pengiriman.service';

describe('ListPengirimanService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListPengirimanService]
    });
  });

  it('should be created', inject([ListPengirimanService], (service: ListPengirimanService) => {
    expect(service).toBeTruthy();
  }));
});
