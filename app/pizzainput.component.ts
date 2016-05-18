import {Component} from '@angular/core';

@Component({
        selector: 'pizza-input',
        template: `
    <input type="text"
    (keyup)="onKeyUp()"
    (input)="onInput($event)"
    [style.background-color]="color">`
    }
)
export class PizzaInputComponent {
    public color:string;

    public onKeyUp():void {
        //console.log(`keyup: ${this.color}`);
    }

    public onInput(event):void {
        console.log(`${event.target.value}`);
    }
}


/*
import {Component} from '@angular/core';

@Component({
        selector: 'pizza-input',
        template: `
    <input type="text"
    (keyup)="onKeyUp()"
    (input)="color=$event.target.value"
    [style.background-color]="color">`
    }
)
export class PizzaInputComponent {
    public color:string;

    public onKeyUp():void {
        //console.log(`keyup: ${this.color}`);
    }
}
*/
