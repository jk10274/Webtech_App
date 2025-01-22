// Author: Jona Kaufmann

"use client";

import React from "react";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import JourneyForm from "../../../components/JourneyForm";
import { addJourney } from "../../../services/journeyService";
import { Journey } from "@/types";

const AddJourneyPage: React.FC = () => {
  const router = useRouter();
  const { id } = useParams();
  const [journey, setJourney] = useState<Omit<Journey, "_id"> | null>(null);

  const handleAddJourney = async (journey: Omit<Journey, "_id">) => {
    await addJourney(journey);
    router.push("/journeys");
  };

  return (
    <div>
      <h1>Reise hinzufügen</h1>
      <JourneyForm onSubmit={handleAddJourney} />
    </div>
  );
};

export default AddJourneyPage;
