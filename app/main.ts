import {bootstrap} from '@angular/platform-browser-dynamic';
import {PizzaAppComponent} from './app.component';
import {PizzaService} from "./shared/pizza/pizza.service";
import {HTTP_PROVIDERS} from '@angular/http';

bootstrap(PizzaAppComponent, [PizzaService, HTTP_PROVIDERS]);
