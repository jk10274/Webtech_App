// Author: Jona Kaufmann

import Journey, { iJourney } from "../models/JourneyModel";

export class JourneyService {
  public async getAllJourneys(): Promise<iJourney[]> {
    return await Journey.find();
  }

  public async getJourneyById(id: string): Promise<iJourney | null> {
    return await Journey.findById(id);
  }

  public async addJourney(
    destinationCountry: string,
    startDate: Date,
    endDate: Date,
    tourguide: string
  ): Promise<iJourney> {
    const newJourney = new Journey({
      destinationCountry,
      startDate,
      endDate,
      tourguide,
    });
    return await newJourney.save();
  }

  public async updateJourney(
    id: string,
    updatedJourney: Partial<iJourney>
  ): Promise<iJourney | null> {
    return await Journey.findByIdAndUpdate(id, updatedJourney, { new: true });
  }

  public async deleteJourney(id: string): Promise<iJourney | null> {
    return await Journey.findByIdAndDelete(id);
  }
}

export default JourneyService;
