// Author: Jona Kaufmann

import express from "express";
import JourneyController from "../controllers/JourneyController";
import { JourneyService } from "../services/JourneyService";
import { verifyToken } from "../middleware/AuthMiddleware";

const router = express.Router();
const journeyService = new JourneyService();
const journeyController = new JourneyController(journeyService);

router.get("/journeys", verifyToken, journeyController.getAllJourneys);
router.get("/journeys/:id", verifyToken, journeyController.getJourney);
router.post("/journeys", verifyToken, journeyController.addJourney);
router.put("/journeys/:id", verifyToken, journeyController.updateJourney);
router.delete("/journeys/:id", verifyToken, journeyController.deleteJourney);

export default router;
