// Author: Jona Kaufmann

"use client";

import React, { Fragment } from "react";
import { useParams } from "next/navigation";
import EditJourneyForm from "@/components/EditJourneyForm";

const EditJourneyPage: React.FC = () => {
  const params = useParams();
  const id = Array.isArray(params.id) ? params.id[0] : params.id;

  if (!id) return <Fragment>Loading...</Fragment>;

  return (
    <div>
      <h1>Edit Journey</h1>
      <EditJourneyForm journeyId={id} />
    </div>
  );
};

export default EditJourneyPage;
