import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { LoginconductorPage } from './loginconductor.page';

describe('LoginconductorPage', () => {
  let component: LoginconductorPage;
  let fixture: ComponentFixture<LoginconductorPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LoginconductorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
