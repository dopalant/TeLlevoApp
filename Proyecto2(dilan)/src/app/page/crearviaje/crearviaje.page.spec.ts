import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CrearviajePage } from './crearviaje.page';

describe('CrearviajePage', () => {
  let component: CrearviajePage;
  let fixture: ComponentFixture<CrearviajePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CrearviajePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
