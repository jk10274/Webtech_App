import mongoose from "mongoose";

export interface iJourney extends mongoose.Document {
    country: string;
    startDate: Date;
    endDate: Date;
}

const journeySchema = new mongoose.Schema({
    country: { type: String, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    /* cities: [
        {
            name: { type: String, required: true },
            days: { type: Number, required: true }
        }
    ],
    guide: {
        name: { type: String, required: true }
    } */
});

const Journey = mongoose.model<iJourney>('Journey', journeySchema);

export default Journey;