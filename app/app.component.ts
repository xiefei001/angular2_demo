import {Component, OnInit, OnChanges, SimpleChange ,Inject, ElementRef} from '@angular/core';
import {RedFontDirective} from './red-font.directive';
import {AddTwoPipe} from "./shared/add-two/add-two.pipe";
import {PizzaService} from './shared/index';
import {Pizza} from "./shared/index";
import {DATEPICKER_DIRECTIVES} from "./components/datepicker";
import {DatePickerPopupComponent} from "./components/datepicker/datepicker-popup.component";



@Component({
    selector: 'pizza-app',
    directives: [RedFontDirective, DATEPICKER_DIRECTIVES, DatePickerPopupComponent],
    pipes: [AddTwoPipe],
    template: `<h1>
                  Willkommen zum Angular2 Tutorial von AngularJS.DE
               </h1>
              <!--<form>
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
                     <span>Anzahl an Pizzen: {{pizzas.length}}</span>           
               </form> -->
               
               <i class="fa fa-calendar fa-4x" aria-hidden="true" (click)="clickCalendar()"></i>
               <datepicker [(ngModel)]="dt" [minDate]="minDate" [showWeeks]="true" *ngIf="opened"></datepicker>
               <br />
               <datepicker-popup></datepicker-popup>
               <!-- 
               <input type="text" class="form-control" datepickerPopup  [(ngModel)]="dt" [(isOpen)]="opened"> 
               <div style="display:inline-block; min-height:290px;"> 
               </div>
               -->
               `
})

export class PizzaAppComponent implements OnInit, OnChanges {
    public search:string;
    public isVisible:boolean = false;
    public pizzas = [];
    public dt = new Date();
    public minDate = new Date();
    public opened:boolean = false;
    public format = "YYYY-MM-DD";

    constructor(
        @Inject(ElementRef) elementRef: ElementRef,
        private pizzaService:PizzaService) {
        this.search = 'Test';
        this.loadData();
        let doc:HTMLHtmlElement = document.getElementsByTagName('html')[0];
        doc.addEventListener('click', (event) => {
            var iEle = elementRef.nativeElement.getElementsByTagName('i')[0];
            if (this.opened && event.target !==iEle) {
                this.opened = false;
                console.log(event.target);
                console.log(elementRef.nativeElement);

            }
        });
    }

    loadData() {
        this.pizzaService.getPizza().subscribe((pizzas:Pizza[]) => this.pizzas = pizzas);
    }

    ngOnInit() {
        console.log("ngOninit invoked");
    }

    ngOnChanges(changes:{[key:string]:SimpleChange}) {
        console.log("ngOnchanges invokde");
        console.log(JSON.stringify(changes));
    }

    clickCalendar() {
        this.opened = !this.opened;
    }
}
