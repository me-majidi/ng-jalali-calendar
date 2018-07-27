import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgJalaliCalendarTemplate } from './ng-jalali-calendar.template';
import { NgJalaliCalendarStyles } from './ng-jalali-calendar.style';
import { DateModel } from './date.model';
import * as moment_ from 'moment-jalaali';
import { days } from './days';
import { range } from './utils';


const moment = moment_;

@Component({
  selector: 'ng-jalali-calendar',
  template: NgJalaliCalendarTemplate,
  styles  : [ NgJalaliCalendarStyles ]
})
export class NgJalaliCalendarComponent implements OnInit {

  currentDate;
  dayNames                            = days;
  days: DateModel[];
  firstOfMonth: number;
  @Input() selectedDates: DateModel[] = [];
  @Output() onSelectDate              = new EventEmitter<DateModel>();

  constructor () { }

  ngOnInit () {
    this.initCalendar();
    this.generateCalendar();
  }

  initCalendar () {
    moment.loadPersian({
      usePersianDigits: true,
      dialect         : 'persian-modern'
    });
    this.currentDate = moment().locale('fa');
  }

  generateCalendar () {
    const firstOfMonth     = 1;
    const numOfDaysInMonth = moment.jDaysInMonth(this.currentDate.jYear(), this.currentDate.jMonth());

    const start = firstOfMonth;
    this.days   = range(start, start + numOfDaysInMonth)
                   .map((date: number, index: number): DateModel => {
                     const d = moment(this.currentDate).locale('fa').jDate(date);
                     if (index === 0) {
                       this.firstOfMonth = d.day();
                     }
                     return {
                       today   : NgJalaliCalendarComponent.isToday(d),
                       selected: NgJalaliCalendarComponent.isSelected(d),
                       mDate   : d
                     };
                   });
  }

  createArray (length: number) {
    if (this.firstOfMonth === 6) {
      return [];
    }
    return Array(length);
  }


  static isToday (date: any): boolean {
    return moment().isSame(moment(date), 'day');
  }

  static isSelected (date: any): boolean {
    //        return _.findIndex(this.selectedDates, (selectedDate) => {
    //            return moment(date).isSame(selectedDate.mDate, 'day');
    //        }) > -1;
    return false;
  }

  isSelectedMonth (date: any): boolean {
    return moment(date).isSame(this.currentDate, 'month');
  }

  selectDate (date: DateModel): void {
    this.onSelectDate.emit(date);
  }

  prevMonth () {
    this.currentDate = moment(this.currentDate).subtract(1, 'jMonth');
    this.generateCalendar();
  }

  nextMonth () {
    this.currentDate = moment(this.currentDate).add(1, 'jMonth');
    this.generateCalendar();
  }

  firstMonth () {
    this.currentDate = moment(this.currentDate).startOf('jYear');
    this.generateCalendar();
  }

  lastMonth () {
    this.currentDate = moment(this.currentDate).endOf('jYear');
    this.generateCalendar();
  }

  prevYear () {
    this.currentDate = moment(this.currentDate).subtract(1, 'jYear');
    this.generateCalendar();
  }

  nextYear () {
    this.currentDate = moment(this.currentDate).add(1, 'jYear');
    this.generateCalendar();
  }

}
