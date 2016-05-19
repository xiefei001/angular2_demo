/**
 * Created by xie.fei on 19.05.2016.
 */
import * as moment from 'moment/moment';

export class DateFormatter {
    public format(date:Date, format: string):string {
        return moment(date.getTime()).format(format);
    }
}
