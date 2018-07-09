import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateListPengirimanBesarComponent } from './update-list-pengiriman-besar.component';

describe('UpdateListPengirimanBesarComponent', () => {
  let component: UpdateListPengirimanBesarComponent;
  let fixture: ComponentFixture<UpdateListPengirimanBesarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateListPengirimanBesarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateListPengirimanBesarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
