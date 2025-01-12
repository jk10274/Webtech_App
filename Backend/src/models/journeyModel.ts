import mongoose, { Document, Schema } from "mongoose";

export interface iJourney extends Document {
    country: string;
    startDate: Date;
    endDate: Date;
}

const journeySchema = new Schema({
    country: { type: String, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    cities: [
        {
            name: { type: String, required: true },
            days: { type: Number, required: true }
        }
    ],
    guide: {
        name: { type: String, required: true }
    }
});

const Journey = mongoose.model<iJourney>('Journey', journeySchema);

export default Journey;