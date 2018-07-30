<p align="center">
  <img height="200px" width="200px" style="text-align: center;" src="https://cdn.rawgit.com/me-majidi/ng-jalali-calendar/84f7d102/logo.svg">
</p>
<h1>Ng-Jalali-Calendar</h1>
<p>Jalali calendar for Angular4+ applications</p>





<img width="600px" src="https://cdn.rawgit.com/me-majidi/ng-jalali-calendar/a8ff54f9/demo_img1.JPG">
<img width="400px" src="https://cdn.rawgit.com/me-majidi/ng-jalali-calendar/84f7d102/demo_img3.JPG">




## Table of contents
 -  [Online Demo](https://me-majidi.github.io/ng-jalali-calendar/)
 -  [Installation](https://www.npmjs.com/package/ng-jalali-calendar#installation)
 -  [Usage](https://www.npmjs.com/package/ng-jalali-calendar#usage)
  - [API](https://www.npmjs.com/package/ng-jalali-calendar#api)
  - [Example](https://www.npmjs.com/package/ng-jalali-calendar#example)
 






## Installation
```shell
npm install --save ng-jalali-calendar
```


## Usage
Import  `NgJalaliCalendarModule` in your module

```typescript
import { NgModule } from '@angular/core';
import { NgJalaliCalendarModule } from 'ng-jalali-calendar'

@NgModule({
  imports: [ NgJalaliCalendarModule ]
})
export class YourModule { }
```
afterward, add the `ng-jalali-component` tag  into the component where you want to use the calendar :
```html
    <ng-jalali-calendar></ng-jalali-calendar>
```


## API	
**Inputs:**


 Input | Type  | Description
 --- | --- | --- 
 selectedDates | String[] | dates that you want to be selected on the calendar


**Events:**

| Output | $event | Description |
| --- | ---- | --- |
| dateSelected | String | emitted when selecting a date |


> the module works with dates in `YYYY/MM/DD` format
## Example
```typescript
import { Component, OnInit } from '@angular/core';  

  
@Component({  
    selector : 'app-example',  
    templateUrl: './example.component.html',  
    styleUrls : [ './example.component.css' ]  
})  
export class ExampleComponent implements OnInit {  
    selectedDate: string = '';  
    selectedDates: string[] = [
	'1397/5/22',
	'1397/12/1'
	'1397/01/5'
    ];
  
    constructor () {}  
  
    ngOnInit () {
	}
	  
    onSelectDate(event: string) { 
		this.selectedDate = event;  
    }  
}
```

```html
<ng-jalali-calendar 
	(dateSelected)="onSelectDate($event)" 
	[selectedDates]="selectedDates"></ng-jalali-calendar>
```


