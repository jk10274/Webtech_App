// Author: Jona Kaufmann

"use client";

import React, { use } from "react";
import JourneysTable from "@/components/JourneysTable";
import useAuth from "../hooks/useAuth";

const Page: React.FC = () => {
  useAuth();

  return (
    <div className="center-container">
      <JourneysTable />
    </div>
  );
};

export default Page;
