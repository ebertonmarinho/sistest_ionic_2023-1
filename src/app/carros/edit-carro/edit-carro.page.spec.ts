import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditCarroPage } from './edit-carro.page';

describe('EditCarroPage', () => {
  let component: EditCarroPage;
  let fixture: ComponentFixture<EditCarroPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EditCarroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
