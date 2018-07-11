import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateListPengirimanComponent } from './update-list-pengiriman.component';

describe('UpdateListPengirimanComponent', () => {
  let component: UpdateListPengirimanComponent;
  let fixture: ComponentFixture<UpdateListPengirimanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateListPengirimanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateListPengirimanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
