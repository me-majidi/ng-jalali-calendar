# NgJalaliCalendar
jalali calendar component for Angular4+ applications [DEMO](https://me-majidi.github.io/ng-jalali-calendar/)









![ng-jalali-calendar](https://raw.githubusercontent.com/me-majidi/ng-jalali-calendar/master/img-of-component.jpg)



## Installation
```shell
npm install --save ng-jalali-calendar
```


## Usage
Import the `NgJalaliCalendarModule` in your module:

```typescript
// my-component.module.ts

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgJalaliCalendarModule } from 'ng-jalali-calendar'

@NgModule({
  //...
  imports: [
    //...
    NgJalaliCalendarModule
  ],
  //...
})
export class MyModule { }
```



```html
    <!-- my-component.component.html -->
    <ng-jalali-calendar></ng-jalali-calendar>
```
