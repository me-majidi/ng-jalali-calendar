export const NgJalaliCalendarStyles = `
  :host {
  display: block;
  direction: rtl;
}

.calendar__nav {
  display: flex;
  justify-content: space-around;
}
.calendar__nav .month-nav,
.calendar__nav .year-nav {
  display: flex;
  align-items: center;
}
.calendar__nav .month-nav span,
.calendar__nav .year-nav span {
  margin: 0 5px;
  min-width: 50px;
  text-align: center;
}
.calendar__nav > div:last-child {
  border-top: 0;
}
.calendar__body {
  margin-top: 20px;
}
.calendar__body .day-names {
  display: flex;
  background: #424242;
  color: #FFF;
  padding: 10px 0;
  border-radius: 6px;
}
.calendar__body .day-names .day-name {
  text-align: center;
  flex: 0 0 14.285714286%;
}
.calendar__body .days {
  display: flex;
  flex-wrap: wrap;
  margin-top: 1.5rem;
}
.calendar__body .days .day {
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 14.285714286%;
  margin-bottom: 6px;
  padding: 5px 0;
}
.calendar__body .days .day:not(.empty) span {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s;
  width: 100%;
  padding: 1rem;
}
.calendar__body .days .day.today span {
  border: 1px solid #56B80C;
  border-radius: 5px;
}

i {
  border: solid currentColor;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
}

.right {
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
}

.left {
  transform: rotate(135deg);
  -webkit-transform: rotate(135deg);
}

.up {
  transform: rotate(-135deg);
  -webkit-transform: rotate(-135deg);
}

.down {
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
}

a.btn {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  color: #FFF;
  background-color: #424242;
  cursor: pointer;
  padding: 0.375rem 0.75rem;
  font-size: 0.8rem;
  border-radius: 15px;
}
`;
