import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddCarroPage } from './add-carro.page';

describe('AddCarroPage', () => {
  let component: AddCarroPage;
  let fixture: ComponentFixture<AddCarroPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddCarroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
