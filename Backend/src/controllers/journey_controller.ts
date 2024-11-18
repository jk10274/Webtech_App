import { Request, Response } from "express";
import { getAllJourneys } from "../services/journey_services";
import { addJourney } from "../services/journey_services";
import { Country } from "../models/Country";
import { Guide } from "../models/Guide";
import { City } from "../models/City";

export const listJourneys = (req: Request, res: Response) => {
    let journeys = getAllJourneys();
    /* let journey_page = "<html><head><title>Journeys</title></head><body><h1>Journeys</h1><ul>";
    
    journeys.forEach(journey => {
        journey_page += "<li>" + journey.getName() + "</li>";
    });

    journey_page += "</ul></body></html>"; */
    res.send(journeys);
}

export const createJourney = (req: Request, res: Response) => {
    try {
        // Prüfen, ob req.body ein Array ist
        if (!Array.isArray(req.body) || req.body.length === 0) {
            return res.status(400).send({ error: 'Request body must be a non-empty array' });
        }

        const travelData = req.body[0]; // Das erste Objekt im Array
        let country = travelData.country; // Korrekt: travelData.country
        let startDate = travelData.startDate;
        let endDate = travelData.endDate;
        let cities = travelData.cities
        let guide = travelData.guide;

        // Debug-Ausgabe (falls nötig)
        console.log('Parsed Data:', { country, startDate, endDate, cities, guide });

        // Hier deine ⁠ addNewTravel ⁠-Logik
        let travels = addJourney(
            new Country(country),
            new Date(startDate),
            new Date(endDate),
            cities.map((city: { name: string, days: number }) => new City(city.name, city.days)),
            new Guide(guide)
        );

        res.status(201).send(travels);
    } catch (error) {
        console.error('Error processing request:', error);
        res.status(500).send({ error: 'Internal Server Error' });
    }

    res.send("Journey created");
}