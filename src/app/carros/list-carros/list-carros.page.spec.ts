import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListCarrosPage } from './list-carros.page';

describe('ListCarrosPage', () => {
  let component: ListCarrosPage;
  let fixture: ComponentFixture<ListCarrosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListCarrosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
