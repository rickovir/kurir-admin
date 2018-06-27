import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KurirDetailComponent } from './kurir-detail.component';

describe('KurirDetailComponent', () => {
  let component: KurirDetailComponent;
  let fixture: ComponentFixture<KurirDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KurirDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KurirDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
