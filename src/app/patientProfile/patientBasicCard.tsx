// components/patient/PatientBasicCard.tsx
"use client";

import { CombinedPatient, Patient } from "@/components/type";
import { useParams, useRouter } from "next/navigation";
import PatientDetails from "./patientDetails";


interface PatientBasicCardProps {

  patient: CombinedPatient;
}

export default function PatientBasicCard({ patient }: PatientBasicCardProps) {
  const router = useRouter();
  const params = useParams();
  const patientId = params.id;

  return (
    <div className="bg-white max-w-4xl w-full mx-auto shadow-lg rounded-2xl pt-6 p-4 sm:p-6">

      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">{patient.name}</h1>

      </div>


      <div >
        <PatientDetails patient={patient} />        
      </div>
    </div>
  );
}
