export const calendarTemplate = `
    <div class="calendar">
        <div class="calendar__nav">
        <div class="month-nav">
            <a class="btn"
                    (click)="prevMonth()">
                <i class="arrow right"></i>
            </a>
            <span class="">{{ currentDate.format('jMMMM') }}</span>
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
        <div class="calendar__body">
            <div class="day-names">
                <div *ngFor="let name of dayNames"
                     class="day-name">
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
                     (click)="selectDate(day)"
                     [ngClass]="{ today: day.today, active: day.active, selected: isActive(day) }">
                    <span>{{ day.mDate.jDate() | toPersian }}</span>
                </div>
            </div>
        </div>
    </div>
`;
