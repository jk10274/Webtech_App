import Journey from "../models/journeyModel";

import { Request, Response } from "express";

async function getAllJourneys(req: Request, res: Response) {
    try {
        console.log("Getting all journeys");
        const journeys = await Journey.find();
        console.log(journeys);
        res.status(200).send(journeys);
    } catch (error) {
        console.error("Error getting all journeys:", error);
        res.status(500).send({ error: "Internal Server Error" });
    }
}

async function createJourney(req: Request, res: Response) {
    try {
        console.log("Creating journey");
        const journey = new Journey(req.body);
        const result = await journey.save();
        res.status(201).send(result);
    } catch {
        res.status(500).send({ error: "Internal Server Error" });
    }
}

async function getJourneyById(req: Request, res: Response) {
    try {
        console.log("Getting journey by id");
        const journey = await Journey.findById(req.params.id);
        if (journey) {
            res.status(200).send(journey);
        } else {
            res.status(404).send({ error: "Journey not found" });
        }
    } catch {
        res.status(500).send({ error: "Internal Server Error" });
    }
}

async function updateJourney(req: Request, res: Response) {
    try {
        console.log("Updating journey");
        const journeyId = req.params.id;
        const updateData = req.body;
        const journey = await Journey.findByIdAndUpdate(journeyId, updateData, { new: true });
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