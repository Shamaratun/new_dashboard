"use client";

import { useEffect, useState } from "react";
import { getTodaysFollowups } from "./actions";
import { Patient } from "./type";
import Pagination from "./pagination";
import PatientModal from "./patientModal";


export default function TodaysFollowupsPage() {
 const [patients, setPatients] = useState<Patient[]>([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
    const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null);
  

    useEffect(() => {
      async function loadData() {
                try {
                 await getTodaysFollowups().then((res) => {
                    console.log(res)
                    setPatients(res.data || []);
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
    
        if (loading)
            return <p className="text-center text-gray-500" > Loading...</p>;
    
        if (!patients.length)
            return <p className="text-center text-gray-500" > No patients found </p>;
     const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = patients.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(patients.length / itemsPerPage);
  return (
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
                {currentItems.map((p, i) => (
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
       <Pagination
                      currentPage={currentPage}
                      totalPages={totalPages}
                      totalItems={patients.length}
                      itemsPerPage={itemsPerPage}
                      onPageChange={(page) => setCurrentPage(page)}
                  />
      
                  {/*  Modal */}
                  <PatientModal
                      patient={selectedPatient}
                      onClose={() => setSelectedPatient(null)}
                  />
              </div>
          );
      }