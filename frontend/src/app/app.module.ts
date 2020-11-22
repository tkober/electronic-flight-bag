import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {AircraftSelectionComponent} from './aircraft-selection/aircraft-selection.component';
import {ElectronicFlightBagComponent} from './electronic-flight-bag/electronic-flight-bag.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    AircraftSelectionComponent,
    ElectronicFlightBagComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatTabsModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
