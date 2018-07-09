import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPengirimanBesarComponent } from './list-pengiriman-besar.component';

describe('ListPengirimanBesarComponent', () => {
  let component: ListPengirimanBesarComponent;
  let fixture: ComponentFixture<ListPengirimanBesarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPengirimanBesarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPengirimanBesarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
