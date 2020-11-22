import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AircraftSelectionComponent } from './aircraft-selection/aircraft-selection.component';
import { ElectronicFlightBagComponent } from './electronic-flight-bag/electronic-flight-bag.component';

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
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
