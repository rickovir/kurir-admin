import { TestBed, inject } from '@angular/core/testing';

import { ListPengirimanBesarService } from './list-pengiriman-besar.service';

describe('ListPengirimanBesarService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListPengirimanBesarService]
    });
  });

  it('should be created', inject([ListPengirimanBesarService], (service: ListPengirimanBesarService) => {
    expect(service).toBeTruthy();
  }));
});
