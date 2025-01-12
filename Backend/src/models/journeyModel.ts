import mongoose from "mongoose";

export interface iJourney {
    country: string;
    startDate: Date;
    endDate: Date;
}

const journeySchema = new mongoose.Schema({
    country: { type: String, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true }
});

const Journey = mongoose.model('Journey', journeySchema);

export default Journey;