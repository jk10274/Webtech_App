// Author: Jona Kaufmann

"use client";

import React, { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import JourneyForm from "../../../../components/JourneyForm";
import {
  getJourneyById,
  updateJourney,
} from "../../../../services/journeyService";
import { Journey } from "@/types";
import useAuth from "../../../hooks/useAuth";

const EditJourneyPage: React.FC = () => {
  useAuth();

  const router = useRouter();
  const { id } = useParams();
  const [journey, setJourney] = useState<Omit<Journey, "_id"> | null>(null);

  useEffect(() => {
    if (id) {
      const fetchJourney = async () => {
        const data = await getJourneyById(id as string);
        setJourney({
          destinationCountry: data.destinationCountry,
          startDate: data.startDate,
          endDate: data.endDate,
        });
      };
      fetchJourney();
    }
  }, [id]);

  const handleUpdateJourney = async (updatedJourney: Omit<Journey, "_id">) => {
    await updateJourney(id as string, updatedJourney);
    router.push(`/journeys/${id}`);
  };

  if (!journey) return <div>Loading...</div>;

  return (
    <div>
      <h1>Reise bearbeiten</h1>
      <JourneyForm onSubmit={handleUpdateJourney} />
    </div>
  );
};

export default EditJourneyPage;
