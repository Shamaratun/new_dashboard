"use client";

import { useEffect, useState } from "react";
import PatientModal from "./patientModal";
import { Patient } from "./type";
import Pagination from "./pagination";
import {notReleasedPatients } from "./notReleasedPatients";

export default function DischargeTable() {
 const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const [patients, setPatients] = useState<Patient[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null);

  useEffect(() => {
    async function loadData() {
      try {
        await notReleasedPatients().then((res) => {
          console.log(res)
          setPatients(res.data || []);
          setLoading(false);
        });
       
      } catch (err) {
        console.error("Error fetching patients:", err);
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, []);

  const formatDate = (dateStr: string) =>
    dateStr
      ? new Date(dateStr).toLocaleString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      })
      : "-";

  if (loading)
    return (
      <div className="flex justify-center items-center h-48">
        <p className="text-gray-500 text-lg animate-pulse">Loading...</p>
      </div>
    );

  if (!patients.length)
    return (
      <div className="flex justify-center items-center h-48">
        <p className="text-gray-500">No discharged patients found</p>
      </div>
    );

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = patients.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(patients.length / itemsPerPage);

  return (
    <div>
       <h1 className="text-xl font-bold mb-4" >Patient Admitted Not Released</h1>
      <table className="min-w-full border-collapse border border-gray-300 shadow-md rounded-lg overflow-hidden text-sm">
        <thead className="bg-amber-600 text-white">
          <tr>
            <th className="border border-gray-300 px-4 py-2">Admission ID</th>
            <th className="border border-gray-300 px-4 py-2">Patient ID</th>
            <th className="border border-gray-300 px-4 py-2">Hospital ID</th>
            <th className="border border-gray-300 px-4 py-2">Hospital Name</th>
            <th className="border border-gray-300 px-4 py-2">Name</th>
            <th className="border border-gray-300 px-4 py-2">Gender</th>
            <th className="border border-gray-300 px-4 py-2">Age</th>
            <th className="border border-gray-300 px-4 py-2">Mobile Number</th>
            <th className="border border-gray-300 px-4 py-2">Address</th>
            <th className="border border-gray-300 px-4 py-2">Action</th>
          </tr>
        </thead>

        <tbody>
          {currentItems.map((p, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="border px-4 py-2">{p.admission_id}</td>
              <td className="border px-4 py-2">{p.patient_id}</td>
              <td className="border px-4 py-2">{p.hospital_id}</td>
              <td className="border px-4 py-2">{p.hospital_name}</td>
              <td className="border px-4 py-2">{p.patient_name}</td>
              <td className="border px-4 py-2">{p.gender}</td>
              <td className="border px-4 py-2">{p.age}</td>
              <td className="border px-4 py-2">{p.mobile_number}</td>
              <td className="border px-4 py-2">{p.address}</td>
              <td
                className="border px-4 py-2 text-blue-700 font-bold cursor-pointer"
                onClick={() => setSelectedPatient(p)}
              >
                VIEW
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination Component */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        totalItems={patients.length}
        itemsPerPage={itemsPerPage}
        onPageChange={(page) => setCurrentPage(page)}
      />
    
      {/* Modal */}
      <PatientModal
        patient={selectedPatient}
        onClose={() => setSelectedPatient(null)}
      />
    </div>
  );
}