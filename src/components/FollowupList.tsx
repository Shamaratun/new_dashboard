"use client";

import { useEffect, useState } from "react";
import { getTodaysFollowups } from "./actions";

type Patient = {
  patient_id: number;
  patient_name: string;
  age: number;
  gender: string;
  phone: string;
  admissionDate: Date | null;
  hospital: string;
};

export default function TodaysFollowupsPage() {
  const [patients, setPatients] = useState<Patient[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const data = await getTodaysFollowups();
      setPatients(data);
      setLoading(false);
    }
    fetchData();
  }, []);

  return (
    <div className="p-4 sm:p-6 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Todays Followups</h1>
      {loading ? (
        <p>Loading...</p>
      ) : patients.length === 0 ? (
        <p>No follow-ups for today.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full border rounded-lg overflow-hidden">
            <thead className="bg-blue-100">
              <tr>
                <th className="text-left p-2 border-b">ID</th>
                <th className="text-left p-2 border-b">Name</th>
                <th className="text-left p-2 border-b">Age</th>
                <th className="text-left p-2 border-b">Gender</th>
                <th className="text-left p-2 border-b">Phone</th>
                <th className="text-left p-2 border-b">Hospital</th>
                <th className="text-left p-2 border-b">Admission Date</th>
              </tr>
            </thead>
            
              <tbody className="bg-white divide-y divide-gray-100">
                {patients.map((p, i) => (
                  <tr
                    key={i}
                    className="hover:bg-blue-50 transition-colors duration-200"
                  >

                    <td className="px-6 py-4 text-md text-gray-700">{p.patient_id}</td>
                    <td className="px-6 py-4 text-md text-gray-700">{p.patient_name}</td>
                    <td className="px-6 py-4 text-sm text-gray-700">{p.gender}</td>

                    <td className="px-6 py-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${p.gender === "Male"
                            ? "bg-blue-100 text-blue-900"
                            : "bg-pink-100 text-pink-900"
                          }`}
                      >
                        Scheduled
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>

          </table>
        </div>
      )}
    </div>
  );
}