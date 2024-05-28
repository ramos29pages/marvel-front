import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarHostComponent } from './calendar-host.component';

describe('CalendarHostComponent', () => {
  let component: CalendarHostComponent;
  let fixture: ComponentFixture<CalendarHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalendarHostComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CalendarHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
