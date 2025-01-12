// Author: Jona Kaufmann

import express, { Request, Response } from 'express';
import { listJourneys } from '../controllers/journey_controller';/* 
import { createJourney } from '../controllers/journey_controller'; */
/* import { updateJourney } from '../controllers/journey_controller'; */
/* import { deleteJourney } from '../controllers/journey_controller';
 */import { getJourney } from '../controllers/journey_controller';
import { getAllJourneys, getJourneyById, updateJourney, createJourney, deleteJourney } from '../controllers/journeyController';

const router = express.Router();

router.get('/journeys', (req: Request, res: Response) => {
    getAllJourneys(req, res);
});

router.get('/journeys/:id', (req: Request, res: Response) => {
    getJourneyById(req, res);
});

router.post('/journeys', (req: Request, res: Response) => {
    createJourney(req, res);
});

router.put('/journeys/:id', (req: Request, res: Response) => {
    updateJourney(req, res);
});

router.delete('/journeys/:id', (req: Request, res: Response) => {
    deleteJourney(req, res);
});

export default router;