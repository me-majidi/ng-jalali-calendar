import { Component, EventEmitter, HostListener, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { calendarTemplate } from './ng-jalali-calendar.template';
import { calendarStyles } from './ng-jalali-calendar.style';
import { DateModel } from './date.model';
import * as moment_ from 'moment-jalaali';
import { days, daysAbbr } from './days';
import { range } from './utils';


const moment = moment_;

@Component({
    selector: 'ng-jalali-calendar',
    template: calendarTemplate,
    styles  : [ calendarStyles ]
})
export class NgJalaliCalendarComponent implements OnInit, OnChanges {

    currentDate;
    dayNames = days;
    days: DateModel[] = [];
    firstOfMonth: number;
    activeDate: any;

    @Input()  selectedDates: string[] = [];
    @Output() dateSelected: EventEmitter<string> = new EventEmitter<string>(true);

    constructor () { }

    static isToday (date: any): boolean {
        return moment().isSame(moment(date), 'day');
    }

    isSelected (date: any) {
        let index = -1;

        this.selectedDates.forEach((d, i) => {
            const momentDate = moment(d, 'jYYYY/jMM/jDD');
            if (momentDate.isSame(date, 'day')) {
                index = i;
            }
        });
        return index !== -1;
    }

    ngOnInit () {
        this.initCalendar();
        this.generateCalendar();

        if (window.innerWidth < 700) {
            this.dayNames = daysAbbr;
        }
    }

    initCalendar () {
        moment.loadPersian({
            usePersianDigits: true,
            dialect         : 'persian-modern'
        });
        this.currentDate = moment();
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
                    active: this.isSelected(d),
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

    isSelectedMonth (date: any): boolean {
        return moment(date).isSame(this.currentDate, 'month');
    }

    selectDate (date: DateModel): void {
        const selectedDate = date.mDate;
        this.activeDate = moment(date.mDate);
        this.dateSelected.emit(selectedDate.format('jYYYY/jMM/jDD'));
    }

    isActive(date: DateModel) {
        return date.mDate.isSame(this.activeDate);
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

    ngOnChanges(changes: SimpleChanges) {
        this.days.forEach(day => day.active = this.isSelected(day.mDate));
    }

    @HostListener('window:resize', [ '$event' ])
    onResize (event) {
        if (event.target.innerWidth < 800) {
            this.dayNames = daysAbbr;
        } else {
            this.dayNames = days;
        }
    }
}
