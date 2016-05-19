/**
 * Created by xie on 2016/5/19.
 */
import {global} from '@angular/core/src/facade/lang';

export enum Ng2BootstrapTheme {BS3 = 1, BS4 = 2}

export class Ng2BootstrapConfig {
    private static _theme:Ng2BootstrapTheme;

    public static get theme():Ng2BootstrapTheme {
        // hack as for now
        if (global && (global as any).__theme === 'bs4') {
            return Ng2BootstrapTheme.BS4;
        }
        return (this._theme || Ng2BootstrapTheme.BS3);
    }

    public static set theme(v:Ng2BootstrapTheme) {
        this._theme = v;
    }
}