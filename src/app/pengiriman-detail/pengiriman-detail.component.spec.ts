import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PengirimanDetailComponent } from './pengiriman-detail.component';

describe('PengrimanDetailComponent', () => {
  let component: PengirimanDetailComponent;
  let fixture: ComponentFixture<PengirimanDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PengirimanDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PengirimanDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
