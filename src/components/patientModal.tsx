"use client";

import { Patient } from "./type";



type PatientModalProps = {
  patient: Patient | null;
  onClose: () => void;
};

export default function PatientModal({ patient, onClose }: PatientModalProps) {
  if (!patient) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-1/2">
        <h2 className="text-lg font-bold mb-4">Patient Details</h2>
        <div className="space-y-2">
          <p><span className="font-semibold">Admission ID:</span> {patient.admission_id}</p>
          <p><span className="font-semibold">Patient ID:</span> {patient.patient_id}</p>
          <p><span className="font-semibold">Name:</span> {patient.patient_name}</p>
          <p><span className="font-semibold">Gender:</span> {patient.gender}</p>
?
        </div>
        <button
          onClick={onClose}
          className="mt-4 bg-amber-600 text-white px-4 py-2 rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
}