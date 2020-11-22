import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {AircraftSelectionComponent} from "./aircraft-selection/aircraft-selection.component";
import {ElectronicFlightBagComponent} from "./electronic-flight-bag/electronic-flight-bag.component";


const routes: Routes = [
    { path: 'aircraft', component: AircraftSelectionComponent },
    { path: '', redirectTo: '/aircraft', pathMatch: 'full' },

    { path: 'electroni-flight-back', component: ElectronicFlightBagComponent },

    { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }