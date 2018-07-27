import { NgModule } from '@angular/core';
import { NgJalaliCalendarComponent } from './ng-jalali-calendar.component';
import { CommonModule } from '@angular/common';
import { toPersianPipe } from './topersian.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NgJalaliCalendarComponent, toPersianPipe],
  exports: [NgJalaliCalendarComponent]
})
export class NgJalaliCalendarModule { }
