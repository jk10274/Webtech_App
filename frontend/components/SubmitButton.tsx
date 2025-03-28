// Author: Jona Kaufmann

import React from "react";

interface SubmitButtonProps {
  label: string;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ label }) => {
  return <button type="submit">{label}</button>;
};

export default SubmitButton;