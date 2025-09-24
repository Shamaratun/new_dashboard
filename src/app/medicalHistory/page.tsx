"use client";
import { useState } from "react";
import { investigationsDummy } from "../investigation/investigationDummy";
import { medicalInfoDummy } from "../medical/medicalInfoDummy";
import { surgicalInfoDummy } from "../surgical/surgicalInfoDummy ";

export default function EditPatient() {
  const [openSections, setOpenSections] = useState({
    surgical: false,
    medical: false,
    investigations: false,
  });

  const toggleSection = (section: keyof typeof openSections) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section], // only toggle the clicked one
    }));
  };

  return (
    <div className="space-y-4">
      {/* Surgical Info */}
      <div className="bg-white rounded-xl shadow">
        <button
          onClick={() => toggleSection("surgical")}
          className="w-full text-left p-4 font-semibold text-blue-600 hover:bg-blue-50 rounded-t-xl"
        >
          Surgical Info
        </button>
        {openSections.surgical && (
          <div className="bg-white p-4 rounded-xl shadow mb-4 overflow-x-auto">
            <h2 className="font-semibold text-blue-600 mb-4 text-lg">
              Surgical Info
            </h2>
            {surgicalInfoDummy.surgeries.length > 0 ? (
              <table className="min-w-full border border-gray-200">
                <thead className="bg-blue-100">
                  <tr>
                    <th className="text-left p-2 border-b">Surgery</th>
                    <th className="text-left p-2 border-b">Date</th>
                    <th className="text-left p-2 border-b">Surgeon</th>
                    <th className="text-left p-2 border-b">Hospital</th>
                    <th className="text-left p-2 border-b">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {surgicalInfoDummy.surgeries.map((surgery) => (
                    <tr key={surgery.surgeryId} className="hover:bg-gray-50">
                      <td className="p-2 border-b">{surgery.surgeryName}</td>
                      <td className="p-2 border-b">{surgery.date}</td>
                      <td className="p-2 border-b">{surgery.surgeon}</td>
                      <td className="p-2 border-b">{surgery.hospital}</td>
                      <td className="p-2 border-b">{surgery.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p className="text-gray-500 mt-2">No surgical information available.</p>
            )}
          </div>
        )}
      </div>

      {/* Medical Info */}
      <div className="bg-white rounded-xl shadow">
        <button
          onClick={() => toggleSection("medical")}
          className="w-full text-left p-4 font-semibold text-green-600 hover:bg-green-50 rounded-t-xl"
        >
          Medical Info
        </button>
        {openSections.medical && (
          <div className="bg-white p-4 rounded-xl shadow mb-4 overflow-x-auto">
            <h2 className="font-semibold text-green-600 mb-4 text-lg">
              Medical Info
            </h2>
            {medicalInfoDummy.conditions.length > 0 ? (
              <table className="min-w-full border border-gray-200">
                <thead className="bg-green-100">
                  <tr>
                    <th className="text-left p-2 border-b">Condition</th>
                    <th className="text-left p-2 border-b">Diagnosis Date</th>
                    <th className="text-left p-2 border-b">Medications</th>
                    <th className="text-left p-2 border-b">Doctor</th>
                    <th className="text-left p-2 border-b">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {medicalInfoDummy.conditions.map((c, i) => (
                    <tr key={i} className="hover:bg-gray-50">
                      <td className="p-2 border-b">{c.conditionName}</td>
                      <td className="p-2 border-b">{c.diagnosisDate}</td>
                      <td className="p-2 border-b">{c.medications.join(", ")}</td>
                      <td className="p-2 border-b">{c.doctor}</td>
                      <td className="p-2 border-b">{c.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p className="text-gray-500 mt-2">No medical information available.</p>
            )}
          </div>
        )}
      </div>

      {/* Investigations */}
      <div className="bg-white rounded-xl shadow">
        <button
          onClick={() => toggleSection("investigations")}
          className="w-full text-left p-4 font-semibold text-yellow-600 hover:bg-yellow-50 rounded-t-xl"
        >
          Investigations
        </button>
        {openSections.investigations && (
          <div className="bg-white p-6 rounded-2xl shadow-lg overflow-x-auto">
            <h2 className="font-bold text-yellow-600 text-2xl mb-6">
              Investigations
            </h2>
            {investigationsDummy.investigations.length > 0 ? (
              <table className="min-w-full table-auto border-collapse">
                <thead className="bg-yellow-200">
                  <tr>
                    <th className="text-left p-3 border-b-2 border-yellow-300 text-sm font-semibold text-gray-700 uppercase tracking-wide">
                      Test
                    </th>
                    <th className="text-left p-3 border-b-2 border-yellow-300 text-sm font-semibold text-gray-700 uppercase tracking-wide">
                      Date
                    </th>
                    <th className="text-left p-3 border-b-2 border-yellow-300 text-sm font-semibold text-gray-700 uppercase tracking-wide">
                      Result
                    </th>
                    <th className="text-left p-3 border-b-2 border-yellow-300 text-sm font-semibold text-gray-700 uppercase tracking-wide">
                      Doctor
                    </th>
                    <th className="text-left p-3 border-b-2 border-yellow-300 text-sm font-semibold text-gray-700 uppercase tracking-wide">
                      Notes
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {investigationsDummy.investigations.map((i, index) => (
                    <tr
                      key={i.investigationId}
                      className={`${
                        index % 2 === 0 ? "bg-yellow-50" : "bg-yellow-100"
                      } hover:bg-yellow-200 transition-colors duration-300`}
                    >
                      <td className="p-3 text-gray-800 whitespace-nowrap">{i.testName}</td>
                      <td className="p-3 text-gray-800 whitespace-nowrap">{i.date}</td>
                      <td className="p-3 text-gray-800 font-medium whitespace-nowrap">{i.result}</td>
                      <td className="p-3 text-gray-800 whitespace-nowrap">{i.doctor}</td>
                      <td className="p-3 text-gray-800">{i.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p className="text-gray-500 mt-2">No investigation information available.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}