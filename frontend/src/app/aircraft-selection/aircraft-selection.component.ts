import {Component, OnInit} from '@angular/core';
import {AircraftService} from '../services/aircraft.service';
import {Aircraft} from '../model/aircraft.model';

@Component({
    selector: 'app-aircraft-selection',
    templateUrl: './aircraft-selection.component.html',
    styleUrls: ['./aircraft-selection.component.scss']
})
export class AircraftSelectionComponent implements OnInit {

    public loading = false;
    public aircrafts: Aircraft[];
    public selectedAircarft: Aircraft;

    constructor(private aircraftService: AircraftService) {
    }

    ngOnInit() {
        this.loading = true;
        this.aircraftService.getAircrafts().subscribe(value => {
            this.aircrafts = value;
            this.loading = false;
        });
    }

}
