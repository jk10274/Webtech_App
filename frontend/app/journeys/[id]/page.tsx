// Author: Jona Kaufmann

"use client";

import { useParams } from "next/navigation";
import JourneyCard from "@/components/JourneyCard";
import useAuth from "../../hooks/useAuth";

const JourneyPage = () => {
  useAuth();

  const params = useParams();
  const { id } = params;

  if (!id) return <div>Loading...</div>;

  return <JourneyCard id={id as string} />;
};

export default JourneyPage;
