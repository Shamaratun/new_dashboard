// components/patient/PatientBasicCard.tsx
"use client";

import { CombinedPatient, Patient } from "@/components/type";
import { useParams, useRouter } from "next/navigation";


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
      

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-700">
    <div className="">
      <span className="font-semibold">Patient ID:</span>
      <span>{patient.id}</span>
    </div>

    <div className="">
      <span className="font-semibold">Admission ID:</span>
      <span>{patient.admission_id}</span>
    </div>

    <div className="">
      <span className="font-semibold">Age:</span>
      <span>{patient.age}</span>
    </div>

    <div className="">
      <span className="font-semibold">Gender:</span>
      <span>{patient.gender}</span>
    </div>

    <div className="">
      <span className="font-semibold">Hospital ID:</span>
      <span>{patient.hospital_id}</span>
    </div>

    <div className="">
      <span className="font-semibold">Hospital Name:</span>
      <span>{patient.hospital_name}</span>
    </div>

    <div className=" ">
      <span className="font-semibold">Mobile:</span>
      <span>{patient.mobile_number}</span>
    </div>

    <div className="">
      <span className="font-semibold">Address:</span>
      <span>{patient.address_line_one}</span>
    </div>
  </div>
    </div>
  );
}
