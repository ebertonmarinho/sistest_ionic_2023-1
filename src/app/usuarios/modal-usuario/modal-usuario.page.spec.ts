import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalUsuarioPage } from './modal-usuario.page';

describe('ModalUsuarioPage', () => {
  let component: ModalUsuarioPage;
  let fixture: ComponentFixture<ModalUsuarioPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ModalUsuarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
