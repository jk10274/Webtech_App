import { Country } from "../models/Country";
import { Journey } from "../models/Journey";
import { Guide } from "../models/Guide";
import { City } from "../models/City";
import e from "express";

const journeys: Journey[] = [
    new Journey(new Country("Deutschland"), new Date(2021, 6, 1), new Date(2021, 6, 14), [new City("Dresden", 2), new City("Berlin", 1)], new Guide("Max Mustermann")),
];

export const getAllJourneys = (): Journey[] => {
    return journeys;
}

export const addJourney = (country: Country, startDate: Date, endDate: Date, cities: City[], guide: Guide): void => {
    journeys.push(new Journey(country, startDate, endDate, cities, guide));
}