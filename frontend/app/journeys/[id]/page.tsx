"use client";

import React from 'react';
import { useParams } from 'next/navigation';
import Journey from '@/components/Journey';

const JourneyPage: React.FC = () => {
  const params = useParams();
  const id = Array.isArray(params.id) ? params.id[0] : params.id;

  if (!id) return <div>Loading...</div>;

  return (
    <div>
      <h1>Journey Details</h1>
      <Journey journeyId={parseInt(id, 10)} />
    </div>
  );
};

export default JourneyPage;