import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }   from './app.component';
import '../assets/css/public.css'


@NgModule({
    imports: [
        BrowserModule
    ],
    exports: [],
    declarations: [
        AppComponent
    ],
    providers: [],
    bootstrap:[
        AppComponent
    ]
})
export class AppModule { }