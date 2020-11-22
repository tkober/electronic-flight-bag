import {Observable} from 'rxjs';
import {Aircraft} from '../model/aircraft.model';

export class AircraftService {

    private mockAircrafts: Aircraft[];

    constructor() {
        this.buildMockAircrafts();
    }

    public getAircrafts(): Observable<Aircraft[]> {
        return new Observable<Aircraft[]>(subscriber => {
            setTimeout(() => {
                subscriber.next(this.mockAircrafts);
                subscriber.complete();
            }, 2000);
        });
    }

    private buildMockAircrafts() {
        const A20N = new Aircraft();
        A20N.id = 'airbus_a320_neo';
        A20N.name = 'Airbus A320neo';
        A20N.manufacturer = 'Airbus S.A.S.';
        A20N.model = 'A320neo';
        A20N.icaoCode = 'A20N';
        A20N.defaultWeightPerPersonInKg = 70;
        A20N.flightCrew = 2;

        const A359 = new Aircraft();
        A359.id = 'airbus_a350-900_neo';
        A359.name = 'Airbus A350-900';
        A359.manufacturer = 'Airbus S.A.S.';
        A359.model = 'A350-900';
        A359.icaoCode = 'A359';
        A359.defaultWeightPerPersonInKg = 70;
        A359.flightCrew = 2;

        this.mockAircrafts = [
            A20N,
            A359
        ];
    }
}
