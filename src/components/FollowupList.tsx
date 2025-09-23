"use client";

import { useEffect, useState } from "react";
import { getTodaysFollowups } from "./actions";

type Patient = {
  admission_id: string;
  patient_id: string;
  patient_name: string;
  gender: string;
  followup_date: string;
};

export default function FollowupList() {
  const [patients, setPatients] = useState<Patient[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getTodaysFollowups();
        setPatients(res.data || []);
      } catch (err) {
        console.error("Error fetching patients:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading)
    return (
      <div className="flex justify-center items-center h-48">
        <p className="text-gray-500 text-lg animate-pulse">Loading...</p>
      </div>
    );

  if (!patients.length)
    return (
      <div className="flex justify-center items-center h-48">
        <p className="text-gray-400 text-lg">No follow-ups scheduled for today.</p>
      </div>
    );

  return (
    <div className="w-full p-6">
      <h2 className="text-3xl font-bold mb-6 text-slate-800 flex items-center gap-2">
        📋 Today’s Follow-up Patients
      </h2>

      <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-lg bg-white">
        <table className="w-full text-left text-sm text-slate-700">
          <thead className="bg-gradient-to-r from-indigo-50 to-indigo-100 text-slate-700 uppercase text-xs font-semibold sticky top-0 z-10">
            <tr>
              <th className="px-6 py-4">Admission ID</th>
              <th className="px-6 py-4">Patient ID</th>
              <th className="px-6 py-4">Name</th>
              <th className="px-6 py-4">Gender</th>
              <th className="px-6 py-4">Follow-up Date</th>
              <th className="px-6 py-4">Status</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-200">
            {patients.map((p, i) => (
              <tr
                key={i}
                className="hover:bg-indigo-50 hover:shadow-sm transition-all duration-200 cursor-pointer"
              >
                <td className="px-6 py-4 font-medium text-indigo-700">
                  {p.admission_id}
                </td>
                <td className="px-6 py-4">{p.patient_id}</td>
                <td className="px-6 py-4 font-semibold text-slate-800">
                  {p.patient_name}
                </td>
                <td className="px-6 py-4 capitalize">
                  {p.gender === "M" ? "Male" : "Female"}
                </td>
                <td className="px-6 py-4">
                  {new Date(p.followup_date).toLocaleDateString()}
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-xs font-semibold shadow-sm ${
                      p.gender === "M"
                        ? "bg-blue-100 text-blue-800"
                        : "bg-pink-100 text-pink-800"
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
    </div>
  );
}