import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {DlcButtonModule} from "@components/button";
import {DlcSwitchModule} from "@dream_light_color/ng-dlc/switch";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DlcButtonModule,
    DlcSwitchModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
