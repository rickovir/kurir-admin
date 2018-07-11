import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddListPengirimanComponent } from './add-list-pengiriman.component';

describe('AddListPengirimanComponent', () => {
  let component: AddListPengirimanComponent;
  let fixture: ComponentFixture<AddListPengirimanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddListPengirimanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddListPengirimanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
