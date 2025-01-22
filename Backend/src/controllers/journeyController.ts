// Author: Jona Kaufmann

import { Journey } from "../models/Journey";
import JourneyService from "../services/JourneyService";

class JourneyController {
  private journeyService: JourneyService;

  constructor(journeyService: JourneyService) {
    this.journeyService = journeyService;
  }

  public getAllJourneys = async (req: any, res: any) => {
    try {
      const journeys = await this.journeyService.getAllJourneys();
      res.status(200).json(journeys);
    } catch (error) {
      res.status(500).json({ message: "Error retrieving journeys", error });
    }
  };

  public getJourney = async (req: any, res: any) => {
    try {
      const id = req.params.id;
      const journey = await this.journeyService.getJourneyById(id);
      if (journey) {
        res.status(200).json(journey);
      } else {
        res.status(404).json({ message: "Journey not found" });
      }
    } catch (error) {
      res.status(500).json({ message: "Error retrieving journey", error });
    }
  };

  public addJourney = async (req: any, res: any) => {
    try {
      const { destinationCountry, startDate, endDate, tourguide } = req.body;
      const journey = await this.journeyService.addJourney(
        destinationCountry,
        new Date(startDate),
        new Date(endDate),
        tourguide
      );
      res.status(201).json(journey);
    } catch (error) {
      res.status(500).json({ message: "Error adding journey", error });
    }
  };

  public updateJourney = async (req: any, res: any) => {
    try {
      const id = req.params.id;
      const { destinationCountry, startDate, endDate, tourguide } = req.body;
      const updatedJourney = new Journey(
        id,
        destinationCountry,
        new Date(startDate),
        new Date(endDate),
        tourguide
      );
      const result = await this.journeyService.updateJourney(
        id,
        updatedJourney
      );
      if (result !== null) {
        res.status(200).json(updatedJourney);
      } else {
        res.status(404).json({ message: "Journey not found" });
      }
    } catch (error) {
      res.status(500).json({ message: "Error updating journey", error });
    }
  };

  public deleteJourney = async (req: any, res: any) => {
    try {
      const id = req.params.id;
      const index = await this.journeyService.deleteJourney(id);
      if (index !== null) {
        res.status(200).json({ message: "Journey deleted" });
      } else {
        res.status(404).json({ message: "Journey not found" });
      }
    } catch (error) {
      res.status(500).json({ message: "Error deleting journey", error });
    }
  };
}

export default JourneyController;
