/**
 * Created by xie on 2016/5/23.
 */
import {Component} from '@angular/core';
import {DatePickerComponent} from "./datepicker.component";

@Component({
    selector: 'datepicker-popup',
    directives: [DatePickerComponent],
    styles: [
        `
       .input-group {
           position: relative;
           display: table;
           border-collapse: separate;
       }
       .input-cell {
           display: table-cell
       }
        `
    ],
    template: `
    <p class="input-group">
       <input class="input-cell">
       <span class="input-cell" aria-hidden="true">
          <button type="button">
             <i class="fa fa-calendar" aria-hidden="true"></i>
          </button>
       </span>
    </p>
    <datepicker [(ngModel)]="dt" [minDate]="minDate" [showWeeks]="true" *ngIf="opened"></datepicker>
    `
})
export class DatePickerPopupComponent {
    public dt = new Date();
    public minDate = new Date();
    public opened = true;
}