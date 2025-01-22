// Author: Jona Kaufmann

import express from "express";
import journeyRoutes from "./routes/JourneyRoutes";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

const corsOptions = {
  origin: "http://localhost:3001",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));

app.use("/api", journeyRoutes);

app.use(express.static("public"));

export default app;
