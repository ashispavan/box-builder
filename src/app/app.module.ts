import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ActionPanelComponent } from './components/action-panel/action-panel.component';
import { BoxesComponent } from './components/boxes/boxes.component';


@NgModule({
  declarations: [
    AppComponent,
    ActionPanelComponent,
    BoxesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
