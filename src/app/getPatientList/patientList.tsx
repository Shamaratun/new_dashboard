"use client";

import { useState } from "react";
import { fetchPatientById } from "../patientProfile/fetchPatientById";
import { Patient } from "@/components/type";


export default function PatientList({ patients }: { patients: Patient[] }) {
  const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null);

  async function handleView(patient_id: number) {
    try {
      const data = await fetchPatientById(patient_id);
      setSelectedPatient(data);
    } catch (error) {
      console.error("Error fetching patient:", error);
    }
  }

  return (
    <div>
      {patients.map((p) => (
        <div
          key={p.patient_id}
          className="flex justify-between items-center border p-3 rounded-md"
        >
          <div>
            <p className="font-semibold">{p.patient_name}</p>
            <p className="text-sm text-gray-600">{p.gender}</p>
          </div>
          <button
            onClick={() => handleView(p.patient_id)} 
            className="px-3 py-1 bg-cyan-600 text-white rounded-md hover:bg-cyan-700"
          >
            View
          </button>
        </div>
      ))}

      {selectedPatient && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-xl shadow-lg max-w-md w-full">
            <h2 className="text-xl font-bold mb-2">{selectedPatient.patient_name}</h2>
            <p>Gender: {selectedPatient.gender}</p>
            <p>ID: {selectedPatient.patient_id}</p>

            <button
              onClick={() => setSelectedPatient(selectedPatient)}
              className="mt-4 px-3 py-1 bg-red-500 text-white rounded-md"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}