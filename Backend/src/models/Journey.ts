import { City } from './City';
import { Country } from './Country';
import { Guide } from './Guide';

export class Journey {
    private id: number;
    private country: Country;
    private startDate: Date;
    private endDate: Date;
    private cities: City[] = [];
    private guide: Guide;

    constructor(id: number, country: Country, startDate: Date, endDate: Date, cities: City[], guide: Guide) {
        this.id = id;
        this.country = country;
        this.startDate = startDate;
        this.endDate = endDate;
        this.cities = cities;
        this.guide = guide;
    }

    addCity(city: City): void {
        this.cities.push(city);
    }

    removeCity(cityName: string): void {
        this.cities = this.cities.filter(city => city.getName() !== cityName);
    }

    getId(): number {
        return this.id;
    }

    getCountry(): Country {
        return this.country;
    }

    getStartDate(): Date {
        return this.startDate;
    }

    getEndDate(): Date {
        return this.endDate;
    }

    getCities(): City[] {
        return this.cities;
    }

    getGuide(): Guide {
        return this.guide;
    }
}