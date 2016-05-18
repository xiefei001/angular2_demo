import {Component} from '@angular/core';
//import {RedFontDirective} from './red-font.directive';


@Component({
    selector: 'pizza-app',
    template: `<h1>
                  Willkommen zum Angular2 Tutorial von AngularJS.DE
               </h1>
              <form>
                    <input type="text" [(ngModel)]="search">
                    <p>Du suchst gerade nach: {{search.toUpperCase() + "!"}}</p>
                     {{search.toUpperCase() + "!"}} oder {{1 + 2 + 3}}
                     {{search.length === 3 ? "UI" : "PFUI"}}
                     {{search.length || 0}}
                     <button (click)="isVisible = !isVisible" >anzeigen | verstecken</button>
                     <div *ngIf="isVisible" [style.color]="'red'" >Wir sind Ihr Pizza-Dienstleister</div>
               </form>`
})

export class PizzaAppComponent {
    public search:string;
    public isVisible:boolean = false;

    constructor() {
        this.search = 'Test';
    }
}



/*
import {Component} from '@angular/core';

@Component({
    selector: 'pizza-app',
    template: `<h1>
                  Willkommen zum Angular2 Tutorial von AngularJS.DE
               </h1>
              <form>
                    <input type="text" [(ngModel)]="search">
                    <p>Du suchst gerade nach: {{search.toUpperCase() + "!"}}</p>
                     {{search.toUpperCase() + "!"}} oder {{1 + 2 + 3}}
                     {{search.length === 3 ? "UI" : "PFUI"}}
                     {{search.length || 0}}
                     <button (click)="isVisible = !isVisible">anzeigen | verstecken</button>
                     <div *ngIf="isVisible" [style.color]="'red'" >Wir sind Ihr Pizza-Dienstleister</div>
               </form>`
})

export class PizzaAppComponent {
    public search:string;
    public isVisible:boolean = false;

    constructor() {
        this.search = 'Test';
    }
}
*/
