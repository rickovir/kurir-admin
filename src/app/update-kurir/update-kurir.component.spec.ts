import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateKurirComponent } from './update-kurir.component';

describe('UpdateKurirComponent', () => {
  let component: UpdateKurirComponent;
  let fixture: ComponentFixture<UpdateKurirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateKurirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateKurirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
