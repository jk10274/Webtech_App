import express, { Request, Response } from 'express';
import { listJourneys } from '../controllers/journey_controller';
import { createJourney } from '../controllers/journey_controller';

const router = express.Router();

router.get('/journeys', (req: Request, res: Response) => {
    listJourneys(req, res);
});

router.post('/journeys', (req: Request, res: Response) => {
    createJourney(req, res);
});

export default router;