// Author: Jona Kaufmann

import { Country } from "../models/Country";
import { Journey } from "../models/Journey";
import { Guide } from "../models/Guide";
import { City } from "../models/City";

const journeys: Journey[] = [];
let nextId = 1;

export const getAllJourneys = (): Journey[] => {
    return journeys;
}

export const addJourney = (country: Country, startDate: Date, endDate: Date, cities: City[], guide: Guide): Journey => {
    const newJourney = new Journey(nextId++, country, startDate, endDate, cities, guide);
    journeys.push(newJourney);
    return newJourney;
}

export const updateJourneyById = (id: number, country: Country, startDate: Date, endDate: Date, cities: City[], guide: Guide): Journey | null => {
    const index = journeys.findIndex(journey => journey.getId() === id);
    if (index !== -1) {
        journeys[index] = new Journey(id, country, startDate, endDate, cities, guide);
        return journeys[index];
    }
    return null;
}

export const deleteJourneyById = (id: number): boolean => {
    const index = journeys.findIndex(journey => journey.getId() === id);
    if (index !== -1) {
        journeys.splice(index, 1);
        return true;
    }
    return false;
}