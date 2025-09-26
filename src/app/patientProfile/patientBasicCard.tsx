// components/patient/PatientBasicCard.tsx
"use client";

import { Share2, FileDown, Edit3 } from "lucide-react";
import { useRouter } from "next/navigation";

interface Patient {
  id: number;
  name: string;
  age: number;
  gender: string;
  mobile_number: string;
  marital_status: string;
  religion: string;
  address_line_one: string;
}

interface PatientBasicCardProps {
  patient: Patient;
}

export default function PatientBasicCard({ patient }: PatientBasicCardProps) {
  const router = useRouter();

  return (
    <div className="bg-white max-w-4xl w-full mx-auto shadow-lg rounded-2xl pt-6 p-4 sm:p-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">{patient.name}</h1>

        {/* Action buttons */}
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => router.push("/sharePatient")}
            className="flex items-center gap-2 bg-cyan-100 text-cyan-700 px-3 py-2 rounded-lg shadow-sm hover:bg-cyan-200 transition"
          >
            <Share2 size={18} /> Share
          </button>
          <button
            onClick={() => router.push("/export")}
            className="flex items-center gap-2 bg-purple-100 text-purple-700 px-3 py-2 rounded-lg shadow-sm hover:bg-purple-200 transition"
          >
            <FileDown size={18} /> Export
          </button>
          <button
            onClick={() => router.push("/editPatient")}
            className="flex items-center gap-2 bg-green-100 text-green-700 px-3 py-2 rounded-lg shadow-sm hover:bg-green-200 transition"
          >
            <Edit3 size={18} /> Edit
          </button>
        </div>
      </div>

      {/* Patient details */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700 w-full">
        <p className="flex flex-wrap gap-4">
          <span className="font-semibold">Patient ID:</span> {patient.id}
          <span className="font-semibold">Age:</span> {patient.age}
          <span className="font-semibold">Gender:</span> {patient.gender}
        </p>
        <p className="flex flex-wrap gap-4">
          <span className="font-semibold">Marital Status:</span> {patient.marital_status}
          <span className="font-semibold">Religion:</span> {patient.religion}
        </p>
        <p className="flex flex-wrap gap-4">
          <span className="font-semibold">Mobile:</span> {patient.mobile_number}
          <span className="font-semibold">Address:</span> {patient.address_line_one}
        </p>
      </div>
    </div>
  );
}
