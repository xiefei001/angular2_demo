import {Component} from '@angular/core';
import {RedFontDirective} from './red-font.directive';
import {AddTwoPipe} from "./shared/add-two/add-two.pipe";

@Component({
    selector: 'pizza-app',
    directives: [RedFontDirective],
    pipes: [AddTwoPipe],
    template: `<h1>
                  Willkommen zum Angular2 Tutorial von AngularJS.DE
               </h1>
              <form>
                    <input type="text" [(ngModel)]="search">
                    <p>Du suchst gerade nach: {{search.toUpperCase() + "!"}}</p>
                     {{search.toUpperCase() + "!"}} oder {{1 + 2 + 3}}
                     {{search.length === 3 ? "UI" : "PFUI"}}
                     {{search.length || 0}}
                     <button (click)="isVisible = !isVisible" redFont>anzeigen | verstecken</button>
                     <div *ngIf="isVisible" [style.color]="'red'" >Wir sind Ihr Pizza-Dienstleister</div>
                     <div *ngFor="let number of [1, 5, 34, 47]; let i=index">
                       Aktuelle Zahl ist: {{number}}({{i}})
                     </div>
                     <span>{{10.99 | currency:'EUR': true:'5.0-2'}}</span>
                     <div>{{1 | addTwo: 5}}</div>
               </form>`
})

export class PizzaAppComponent {
    public search:string;
    public isVisible:boolean = false;

    constructor() {
        this.search = 'Test';
    }
}
