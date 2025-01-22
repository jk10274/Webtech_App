// Author: Jona Kaufmann

import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { getJourneyById, deleteJourney } from "@/services/journeyService";
import Link from "next/link";
import { Journey } from "@/types";

interface JourneyProps {
  id: string;
}

const JourneyCard: React.FC<JourneyProps> = ({ id }) => {
  const [journey, setJourney] = useState<Journey | null>(null);
  const router = useRouter();

  const handleDelete = async () => {
    await deleteJourney(id);
    router.push("/journeys");
  };

  useEffect(() => {
    if (id) {
      const fetchJourney = async () => {
        const data = await getJourneyById(id);
        setJourney(data);
      };
      fetchJourney();
    }
  }, [id]);

  if (!journey) return <div>Loading...</div>;

  return (
    <div>
      <h1>Details</h1>
      <p>ID: {journey._id}</p>
      <p>Country: {journey.destinationCountry}</p>
      <p>Start date: {new Date(journey.startDate).toLocaleDateString()}</p>
      <p>End date: {new Date(journey.endDate).toLocaleDateString()}</p>
      <Link href="/journeys/[id]/edit" as={`/journeys/${journey._id}/edit`}>
        Edit Journey
      </Link>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default JourneyCard;
