/**
 * Created by xie on 2016/5/23.
 */
import {Component, Inject, ElementRef} from '@angular/core';
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
           display: table-cell;
           height: 34px;
           padding: 6px 12px;
           font-size: 14px;
           color: #555;
           border: 1px solid #ccc;
           border-radius: 4px;
           background-color:white;
       }
       .input-cell-span {
           display: table-cell;
           position: relative;
           font-size: 0;
           white-space: nowrap;
           vertical-align:middle;
        }
        .input-cell-span >.input-cell:hover {
            color: #333;
            background-color: #e6e6e6;
            border-color: #adadad;
            cursor:hand;
         }
         .datepicker-popup {
         position:absolute;
         }
       `
    ],
    template: `
    <p class="input-group">
       <input type="text" class="input-cell">
       <span class="input-cell-span" aria-hidden="true">
          <button type="button" class="input-cell" (click)="openDatepicker()">
             <i class="fa fa-calendar" aria-hidden="true"></i>
          </button>
       </span>
    </p>
    <datepicker [(ngModel)]="dt" [minDate]="minDate" [showWeeks]="true" *ngIf="opened" class="datepicker-popup"></datepicker>
    `
})
export class DatePickerPopupComponent {
    public dt = new Date();
    public minDate = new Date();
    public opened = false;

    constructor(@Inject(ElementRef) elementRef: ElementRef){
        let doc:HTMLHtmlElement = document.getElementsByTagName('html')[0];
        doc.addEventListener('click', (event) => {
            var iEle = elementRef.nativeElement.getElementsByTagName('button')[0];
            if (this.opened && event.target !==iEle) {
                this.opened = false;
                console.log("event.target: ", event.target);
                console.log("elementRef.nativeelement: ", elementRef.nativeElement);

            }
        });
    }

    openDatepicker(){
        console.log("open datepicker");

        this.opened = true;

    }

}