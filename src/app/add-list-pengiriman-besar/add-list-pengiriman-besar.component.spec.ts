import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddListPengirimanBesarComponent } from './add-list-pengiriman-besar.component';

describe('AddListPengirimanBesarComponent', () => {
  let component: AddListPengirimanBesarComponent;
  let fixture: ComponentFixture<AddListPengirimanBesarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddListPengirimanBesarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddListPengirimanBesarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
