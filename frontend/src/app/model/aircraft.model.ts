import {FuelTank} from './fuel-tank.model';
import {PassengerSection} from './passenger-section.model';
import {CargoSection} from './cargo-section.model';

export class Aircraft {
    public id: string;
    public name: string;
    public manufacturer: string;
    public model: string;
    public icaoCode: string;
    public defaultWeightPerPersonInKg: number;
    public flightCrew: number;

    public fuelTanks: FuelTank[];
    public passengerSections: PassengerSection[];
    public cargoSections: CargoSection[];
}
