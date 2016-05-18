/**
 * Created by xie.fei on 18.05.2016.
 */
import {Directive, ElementRef, Renderer} from '@angular/core';

@Directive({
    selector: '[redFont]'
})
export class RedFontDirective {
    constructor(el:ElementRef, renderer:Renderer) {
        renderer.setElementStyle(el.nativeElement, 'color', 'red');
        //el.nativeElement.style.color = 'red';
    }
}
