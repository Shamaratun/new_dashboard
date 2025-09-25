'use client';
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  Share2,
  FileDown,
  Edit3,
  Stethoscope,
  Clock,
  StickyNote,
} from "lucide-react";
import { abcPatients } from "./abcPatients";

interface Patientt {
  id: number;
  name: string;
  age: number;
  gender: string;
  mobile_number: string;
  marital_status: string;
  religion: string;
  address_line_one: string;
}
export default function PatientProfile() {
  const [selectedPatient, setSelectedPatient] = useState<Patientt | null>(null);
  //   const [admissions, setAdmissions] = useState<Admission[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter()
  useEffect(() => {
    async function loadData() {
      try {
        await abcPatients(35, 7).then((res) => {

          console.log(res)

          if (res.data?.patient_basic) {
            setSelectedPatient(res.data.patient_basic);
          }

          // if (res.data?.admissions) {
          //   setAdmissions(res.data.admissions);
          // }
          setLoading(false);
        });
      } catch (err) {
        console.error("Error:", err);
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, []);

  if (loading) return <p className="text-center text-gray-500">Loading...</p>;
  if (!selectedPatient) return <p className="text-center text-gray-500">No patient found</p>;

  return (
    <div className="p-4 sm:p-6 max-w-6xl mx-auto space-y-6 bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen">
      {/* Patient Info Card */}
      <div className="bg-white shadow-lg rounded-2xl p-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4">
          {/* Patient Name */}
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
            {selectedPatient.name}
          </h1>

          {/* Action Buttons */}
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

        {/* Patient Details Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700">
          <p>
            <span className="font-semibold">Patient ID:</span>{" "}
            {selectedPatient.id}
          </p>
          <p>
            <span className="font-semibold">Age:</span> {selectedPatient.age}
          </p>
          <p>
            <span className="font-semibold">Gender:</span>{" "}
            {selectedPatient.gender}
          </p>
          <p>
            <span className="font-semibold">Mobile:</span>{" "}
            {selectedPatient.mobile_number}
          </p>
          <p>
            <span className="font-semibold">Marital Status:</span>{" "}
            {selectedPatient.marital_status}
          </p>
          <p>
            <span className="font-semibold">Religion:</span>{" "}
            {selectedPatient.religion}
          </p>
          <p className="sm:col-span-2">
            <span className="font-semibold">Address:</span>{" "}
            {selectedPatient.address_line_one}
          </p>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="flex flex-col sm:flex-row sm:space-x-3 space-y-2 sm:space-y-0">
        <button
          onClick={() => router.push("/medicalHistory")}
          className="flex items-center gap-2 px-4 py-2 text-gray-800 bg-cyan-100 rounded-lg hover:bg-cyan-200 transition"
        >
          <Stethoscope size={18} /> Medical History
        </button>
        <button
          onClick={() => router.push("/recentVisits")}
          className="flex items-center gap-2 px-4 py-2 text-gray-800 bg-yellow-100 rounded-lg hover:bg-yellow-200 transition"
        >
          <Clock size={18} /> Recent Visits
        </button>
        <button
          onClick={() => router.push("/notes")}
          className="flex items-center gap-2 px-4 py-2 text-gray-800 bg-pink-100 rounded-lg hover:bg-pink-200 transition"
        >
          <StickyNote size={18} /> Notes
        </button>
      </div>
      <div className="mb-4">
        <label className="bg-blue-400 text-white px-4 py-2 rounded-lg w-full sm:w-auto cursor-pointer hover:bg-blue-700 transition">
          <input type="file" className="hidden" onChange={(e) => console.log(e.target.files)} />
          Upload File
        </label>
      </div>
    </div>
  );
}