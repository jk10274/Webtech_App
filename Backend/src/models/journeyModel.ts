// Author: Jona Kaufmann

import mongoose from "mongoose";

export interface iJourney extends mongoose.Document {
  destinationCountry: string;
  startDate: Date;
  endDate: Date;
}

const journeySchema = new mongoose.Schema({
  destinationCountry: {
    type: String,
    required: true,
    validate: {
      validator: function (v: string) {
        return /^[a-zA-Z\s]+$/.test(v);
      },
      message: () =>
        `Only letters are allowed.`,
    },
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
    validate: {
      validator: function (this: any, v: Date) {
        return v > this.startDate;
      },
      message: () =>
        `End date  must be after start date.`,
    },
  },
});

const Journey = mongoose.model<iJourney>("Journey", journeySchema);

export default Journey;
