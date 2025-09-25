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
          <p><span className="font-semibold">Age:</span> {patient.age}</p>
          <p><span className="font-semibold">Mobile:</span> {patient.mobile_number}</p>
          <p><span className="font-semibold">Address:</span> {patient.address}</p>
          <p><span className="font-semibold">Hospital:</span> {patient.hospital_name}</p>
          <p><span className="font-semibold">Hospital ID:</span> {patient.hospital_id}</p>
         {/* <p><span className="font-semibold">Marital Status:</span> {patient.marital_status}</p>
           <p><span className="font-semibold">Admission Date:</span> {patient.date_of_adm}</p>
          <p><span className="font-semibold">Discharge Date:</span> {patient.date_of_discharge || "N/A"}</p>
          <p><span className="font-semibold">Status:</span> {patient.adm_status}</p>
          <p><span className="font-semibold">Remarks:</span> {patient.remarks || "N/A"}</p> */}
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