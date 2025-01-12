import Journey, {iJourney} from "../models/journeyModel";

import { Request, Response } from "express";

async function getAllJourneys(req: Request, res: Response) {
    try {
        const journeys = await Journey.find();
        const formattedJourneys = journeys.map((journey: iJourney) => ({
            id: journey._id,
            country: { name: journey.country},
            startDate: journey.startDate,
            endDate: journey.endDate,
            cities: [{ name: "Sample City", days: 1 }],
            guide: { name: "Sample Guide" }
        }));
        res.status(200).send(formattedJourneys);
    } catch (error) {
        console.error("Error fetching journeys:", error);
        res.status(500).send({ error: "Internal Server Error" });
    }
}

async function createJourney(req: Request, res: Response) {
    try {
        console.log("Creating journey");
        const { country, startDate, endDate, cities, guide } = req.body;

        // Transform the incoming data to match the backend format
        const transformedJourney = {
            country: country,
            startDate: new Date(startDate),
            endDate: new Date(endDate),
            cities: [{ name: "Sample City", days: 1 }],
            guide: { name: "Sample Guide" }
        };

        const journey = new Journey(transformedJourney);
        const result = await journey.save();
        res.status(201).send(result);
    } catch (error) {
        console.error("Error creating journey:", error);
        res.status(500).send({ error: "Internal Server Error" });
    }
}

async function getJourneyById(req: Request, res: Response) {
    try {
        console.log("Getting journey by id");
        const journey = await Journey.findById(req.params.id);
        if (journey) {
            const formattedJourney = {
                id: journey._id,
                country: { name: journey.country},
                startDate: journey.startDate,
                endDate: journey.endDate,
                cities: [{ name: "Sample City", days: 1 }],
                guide: { name: "Sample Guide" }
            };
            res.status(200).send(formattedJourney);
        } else {
            res.status(404).send({ error: "Journey not found" });
        }
    } catch (error) {
        console.error(`Error fetching journey with id ${req.params.id}:`, error);
        res.status(500).send({ error: "Internal Server Error" });
    }
}

async function updateJourney(req: Request, res: Response) {
    try {
        console.log("Updating journey");
        const journeyId = req.params.id;
        const { country, startDate, endDate, cities, guide } = req.body;


        // Transform the incoming data to match the backend format
        const transformedJourney = {
            country: typeof country === 'object' ? country.name : country,
            startDate: new Date(startDate),
            endDate: new Date(endDate),
            cities: [{ name: "Sample City", days: 1 }],
            guide: { name: "Sample Guide" }
        };

        const journey = await Journey.findByIdAndUpdate(journeyId, transformedJourney, { new: true });
        if (journey) {
            res.status(200).send(journey);
        } else {
            res.status(404).send({ error: "Journey not found" });
        }
    } catch (error) {
        console.error("Error updating journey:", error);
        res.status(500).send({ error: "Internal Server Error" });
    }
}

async function deleteJourney(req: Request, res: Response) {
    try {
        console.log("Deleting journey");
        const journey = await Journey.findByIdAndDelete(req.params.id);
        if (journey) {
            res.status(200).send(journey);
        } else {
            res.status(404).send({ error: "Journey not found" });
        }
    } catch (error) {
        console.error("Error deleting journey:", error);
        res.status(500).send({ error: "Internal Server Error" });
    }
}

export { getAllJourneys, createJourney, getJourneyById, updateJourney, deleteJourney };