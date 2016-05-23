/**
 * Created by xie on 2016/5/23.
 */
import {Component} from '@angular/core';
import {DatePickerComponent} from "./datepicker.component";
import {DATEPICKER_DIRECTIVES} from "../datepicker";

@Component({
    selector: 'datepicker-popup',
    directives: [DatePickerComponent, DATEPICKER_DIRECTIVES],
    template:`
    <input type="text">
    <datepicker [(ngModel)]="dt" [minDate]="minDate" [showWeeks]="true" *ngIf="opened"></datepicker>
    <span class="fa fa-calendar fa-4x" aria-hidden="true"></span>
    `
})
export class DatePickerPopupComponent{
    public dt = new Date();
    public minDate = new Date();
    public opened = true;
}