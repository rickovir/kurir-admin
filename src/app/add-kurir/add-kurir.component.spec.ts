import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddKurirComponent } from './add-kurir.component';

describe('AddKurirComponent', () => {
  let component: AddKurirComponent;
  let fixture: ComponentFixture<AddKurirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddKurirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddKurirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
