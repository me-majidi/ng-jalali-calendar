export const calendarStyles = `
  :host {
  display: block;
  direction: rtl;
}
.calendar__nav {
  display: flex;
  justify-content: space-around;
}
.month-nav,
.year-nav {
  display: flex;
  align-items: center;
}
.month-nav span,
.year-nav span {
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
.day-names {
  display: flex;
  background: #424242;
  color: #FFF;
  padding: 10px 0;
  border-radius: 6px;
}
.day-name {
  text-align: center;
  flex: 0 0 14.285714286%;
}
.days {
  display: flex;
  flex-wrap: wrap;
  margin-top: 1.5rem;
}
.day {
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 14.285714286%;
  margin-bottom: 6px;
  padding: 5px 0;
}
.day:not(.empty) span {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s;
  width: 100%;
  padding: 1.2rem;
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

a:hover,
a:hover i {
  color: #fff;
}


.month-nav,
.year-nav {
  min-width: 168px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.day span {
    width: 20px !important;
    height: 20px !important;
    background-color: #e0e0e0;
    border-radius: 50%;
    transition: background-color .3s;
}

.day span:hover {
    background-color: #cdcdcd;
}

.day.today span {
    background-color: #0cc30c;
    color: #fff;
}

.day.selected span {
    background-color: #ff7575;
    color: #fff;
}

.day.active span {
    background-color: #ff7431;
    color: #fff;
}

.empty span {
    background-color: transparent;
}

@media screen and (max-width: 400px) {
    .day:not(.empty) span {
        padding: 1rem !important;
    }
}


@media screen and (max-width: 460px) {
    
    .calendar__nav {
        flex-direction: column;
    }
    
    .month-nav,
    .year-nav {
        flex: 0 0 100%
    }
}
`;
