export const NgJalaliCalendarTemplate = `
    <div class="calendar">
    <div class="calendar__nav">
        <div class="month-nav">
            <a class="btn"
                    (click)="prevMonth()">
                <i class="arrow right"></i>
            </a>
            <span class="mx-4">{{ currentDate.format('jMMMM') }}</span>
            <a class="btn btn-zk-fiord"
                    (click)="nextMonth()">
                <i class="arrow left"></i>
            </a>
        </div>
        <div class="year-nav">
            <a class="btn"
                    (click)="prevYear()">
                <i class="arrow right"></i>
            </a>
            <span>{{ currentDate.format('jYYYY') }}</span>
            <a class="btn"
                    (click)="nextYear()">
                <i class="arrow left"></i>
            </a>
        </div>
    </div>
    <div class="calendar__body pt-5">
        <div class="day-names">
            <div *ngFor="let name of dayNames"
                 class="day-name p9">
                {{ name }}
            </div>
        </div>
        <div class="days">
            <div class="day empty"
                 *ngFor="let extra of createArray(firstOfMonth + 1)">
                <span></span>
            </div>
            <div *ngFor="let day of days"
                 class="day"
                 [ngClass]="{ today: day.today, selected: day.selected }">
                <span>{{ day.mDate.jDate() | toPersian }}</span>
            </div>
        </div>
    </div>
</div>

`;
