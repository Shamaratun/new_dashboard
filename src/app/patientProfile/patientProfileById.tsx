"use client";
import { User, Hash, Phone, Hospital, Calendar, IdCard } from "lucide-react";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Patient } from "@/components/type";
import { fetchPatientById } from "./fetchPatientById";

interface Props {
    patient_id: number;
    admission_id: number;
}

export default function PatientProfileById({ patient_id, admission_id }: Props) {
    const router = useRouter();
    const [patient, setPatient] = useState<Patient | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadPatient() {
            try {
                const res = await fetchPatientById(patient_id, admission_id);
                console.log("Patient data:", res);
                setPatient(res.data || res);
            } catch (err) {
                console.error("Error fetching patient:", err);
            } finally {
                setLoading(false);
            }
        }

        loadPatient();
    }, [patient_id = 35, admission_id = 7]);

    if (loading) return <p className="text-center text-gray-500">Loading</p>;
    if (!patient) return <p className="text-center text-gray-500">Patient not found</p>;

    return (
        <div className="p-4 sm:p-6 lg:p-8 bg-white rounded-xl shadow max-w-7xl w-full mx-auto">
            {/* Header */}
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">PATIENT NAME:{patient.patient_name}</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-4 mb-4 text-gray-700">
                <p><span className="font-semibold">ID:</span> {patient_id}</p>
                <p><span className="font-semibold">Admission ID:</span> {admission_id}</p>
                <p><span className="font-semibold">Age:</span> {patient.age}</p>
                <p><span className="font-semibold">Gender:</span> {patient.gender}</p>
                <p><span className="font-semibold">Phone:</span> {patient.mobile_number}</p>
                <p><span className="font-semibold">Hospital:</span> {patient.hospital_name}</p>
            </div>
            <div className="flex space-x-3">
                <button onClick={() => router.push("/sharePatient")} className="bg-white text-blue-600 px-4 py-2 rounded-lg shadow hover:bg-blue-50">Share</button>
                <button onClick={() => router.push("/export")} className="bg-white text-blue-600 px-4 py-2 rounded-lg shadow hover:bg-blue-50">Export</button>
                <button onClick={() => router.push("/editPatient")} className="bg-white text-blue-600 px-4 py-2 rounded-lg shadow hover:bg-blue-50">Edit</button>
            </div>

            <div className="flex flex-col sm:flex-row sm:space-x-2 space-y-2 sm:space-y-0 border-b-2 border-gray-200 mb-4">
                <button onClick={() => router.push("/medicalHistory")} className="px-3 py-2 text-gray-950 bg-cyan-300 rounded-lg hover:bg-cyan-400 transition">
                    Medical History
                </button>
                <button onClick={() => router.push("/export")} className="px-3 py-2 text-gray-950 bg-cyan-300 rounded-lg hover:bg-cyan-400 transition">
                    Recent Visits
                </button>
                <button onClick={() => router.push("/export")} className="px-3 py-2 text-gray-950 bg-cyan-300 rounded-lg hover:bg-cyan-400 transition">
                    Notes
                </button>
            </div>
        </div >
    );
}