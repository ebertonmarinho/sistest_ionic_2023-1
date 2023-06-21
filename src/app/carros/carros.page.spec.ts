import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CarrosPage } from './carros.page';

describe('CarrosPage', () => {
  let component: CarrosPage;
  let fixture: ComponentFixture<CarrosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CarrosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
