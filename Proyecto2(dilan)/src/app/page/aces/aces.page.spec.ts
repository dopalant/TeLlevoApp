import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AcesPage } from './aces.page';

describe('AcesPage', () => {
  let component: AcesPage;
  let fixture: ComponentFixture<AcesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AcesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
