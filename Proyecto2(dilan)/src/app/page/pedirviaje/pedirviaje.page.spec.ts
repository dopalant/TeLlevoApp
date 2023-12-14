import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { PedirViajePage } from './pedirviaje.page';

describe('PedirViajePage', () => {
  let component: PedirViajePage;
  let fixture: ComponentFixture<PedirViajePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PedirViajePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
