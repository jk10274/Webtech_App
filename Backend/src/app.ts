// author: Jona Kaufmann
import express from 'express';
import journeyRoutes from './routes/journey_routes';

const app = express();

app.use(express.json());
app.use('/api', journeyRoutes);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

export default app;