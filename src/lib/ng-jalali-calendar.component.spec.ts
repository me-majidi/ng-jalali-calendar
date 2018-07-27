import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgJalaliCalendarComponent } from './ng-jalali-calendar.component';

describe('NgJalaliCalendarComponent', () => {
  let component: NgJalaliCalendarComponent;
  let fixture: ComponentFixture<NgJalaliCalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgJalaliCalendarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgJalaliCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
