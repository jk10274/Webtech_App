// Author: Jona Kaufmann

import { Request, Response } from "express";
import { getAllJourneys,updateJourneyById, deleteJourneyById } from "../services/journey_services";
import { addJourney } from "../services/journey_services";
import { Country } from "../models/Country";
import { Guide } from "../models/Guide";
import { City } from "../models/City";

export const listJourneys = (req: Request, res: Response) => {
    let journeys = getAllJourneys();
    res.send(journeys);
}

export const createJourney = (req: Request, res: Response) => {
    try {
        const { country, startDate, endDate, cities, guide } = req.body;

        if (!country || !startDate || !endDate || !guide || !Array.isArray(cities)) {
            return res.status(400).send({ error: 'Missing required fields or cities is not an array' });
        }

        // Debug-Ausgabe (falls nötig)
        console.log('Parsed Data:', { country, startDate, endDate, cities, guide });

        let newJourney = addJourney(
            new Country(country),
            new Date(startDate),
            new Date(endDate),
            cities.map((city: { name: string, days: number }) => new City(city.name, city.days)),
            new Guide(guide)
        );

        res.status(201).send(newJourney);
    } catch (error) {
        console.error('Error processing request:', error);
        res.status(500).send({ error: 'Internal Server Error' });
    }
}

export const updateJourney = (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const { country, startDate, endDate, cities, guide } = req.body;

    if (!country || !startDate || !endDate || !guide) {
        return res.status(400).send("Missing required fields");
    }

    const updatedJourney = updateJourneyById(id, new Country(country), new Date(startDate), new Date(endDate), cities, new Guide(guide));
    if (updatedJourney) {
        res.send(updatedJourney);
    } else {
        res.status(404).send("Journey not found");
    }
}

export const deleteJourney = (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const success = deleteJourneyById(id);
    if (success) {
        res.status(204).send();
    } else {
        res.status(404).send("Journey not found");
    }
}