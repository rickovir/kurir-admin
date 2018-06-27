import { TestBed, inject } from '@angular/core/testing';

import { KurirService } from './kurir.service';

describe('KurirService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [KurirService]
    });
  });

  it('should be created', inject([KurirService], (service: KurirService) => {
    expect(service).toBeTruthy();
  }));
});
