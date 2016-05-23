/**
 * Created by xie on 2016/5/19.
 */
/*
 todo: general:
 1. Popup
 2. Keyboard support
 3. custom-class attribute support
 4. date-disabled attribute support
 5. template-url attribute support
 */
import {DatePickerPopupDirective} from './datepicker/datepicker-popup-old.component';
import {DatePickerComponent} from './datepicker/datepicker.component';

export {DatePickerPopupDirective} from './datepicker/datepicker-popup-old.component';
export {DatePickerComponent} from './datepicker/datepicker.component';
export const DATEPICKER_DIRECTIVES:Array<any> = [DatePickerComponent, DatePickerPopupDirective];