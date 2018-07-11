import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPengirimanComponent } from './list-pengiriman.component';

describe('ListPengirimanComponent', () => {
  let component: ListPengirimanComponent;
  let fixture: ComponentFixture<ListPengirimanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPengirimanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPengirimanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
