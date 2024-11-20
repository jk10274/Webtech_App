// Author: Jona Kaufmann

import express from 'express';
import journeyRoutes from './routes/journey_routes';

const app = express();

app.use(express.json());
app.use('/api', journeyRoutes);

app.use(express.static('public'));

export default app;