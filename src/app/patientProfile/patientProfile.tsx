'use client";'
import { useState } from "react";
import PatientBasicCard from "./patientBasicCard";
import { Patientt } from "./abcType";

export default function PatientProfile() {
  const [selectedPatient, setSelectedPatient] = useState<Patientt | null>(null);

  
  if (!selectedPatient) return <p>No patient found</p>;

  return (
    <div className="p-6">
      {/* Reuse component by passing patient as prop */}
      <PatientBasicCard patient={selectedPatient} />

      {/* Other sections (tabs, tables, etc.) */}
    </div>
  );
}