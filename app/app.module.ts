import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { Test2Component } from './test2/test2.component';
import { DataComponent } from './data/data.component';
import { Data2Component } from './data2/data2.component';
import { Zadanie1Component } from './zadanie1/zadanie1.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    Test2Component,
    DataComponent,
    Data2Component,
    Zadanie1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
