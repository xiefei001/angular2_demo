/**
 * Created by xie.fei on 18.05.2016.
 */
import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'addTwo'
})
export class AddTwoPipe implements PipeTransform {
    transform(number:number, number2:number):any {
        return (number +2) * number2;
    }
}
