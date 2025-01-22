// Author: Jona Kaufmann

import express from "express";
import JourneyController from "../controllers/JourneyController";
import { JourneyService } from "../services/JourneyService";

const router = express.Router();
const journeyService = new JourneyService();
const journeyController = new JourneyController(journeyService);

router.get("/journeys", journeyController.getAllJourneys);
router.get("/journeys/:id", journeyController.getJourney);
router.post("/journeys", journeyController.addJourney);
router.put("/journeys/:id", journeyController.updateJourney);
router.delete("/journeys/:id", journeyController.deleteJourney);

export default router;
