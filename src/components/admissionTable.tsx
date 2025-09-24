"use client";

import { useEffect, useState } from "react";
import { getPatientsWithAdmission } from "./getPatientWithAdmission";
import { Patient } from "./type";
import Pagination from "./pagination";
import PatientModal from "./patientModal";

export default function AdmissionTable() {
    const [patients, setPatients] = useState<Patient[]>([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null);

    useEffect(() => {
        async function loadData() {
            try {
             await getPatientsWithAdmission().then((res) => {
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

    // Pagination logic
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = patients.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(patients.length / itemsPerPage);

    return (
        <div className="p-6" >
            <h1 className="text-xl font-bold mb-4" > Patients With Admission </h1>

            < table className="min-w-full border-collapse border border-gray-300 shadow-md rounded-lg overflow-hidden text-sm" >
                <thead className="bg-amber-600 text-white" >
                    <tr>
                        <th className="border px-4 py-2" > Admission ID </th>
                        <th  className="border px-4 py-2" > Patient ID </th>
                        <th  className="border px-4 py-2" > Hospital ID </th>
                        <th  className="border px-4 py-2" > Hospital Name </th>
                        <th  className="border px-4 py-2" > Patient Name </th>
                        <th  className="border px-4 py-2" > Gender </th>
                        <th  className="border px-4 py-2" > Age </th>
                        <th  className="border px-4 py-2" > Mobile </th>
                        <th  className="border px-4 py-2" > Address </th>
                        <th  className="border px-4 py-2" > Action </th>
                    </tr>
                </thead>

                <tbody>
                    {
                        currentItems.map((p, i) => (
                            <tr key={i} className="hover:bg-gray-50" >
                                <td className="border px-4 py-2" > {p.admission_id} </td>
                                < td className="border px-4 py-2" > {p.patient_id} </td>
                                < td className="border px-4 py-2" > {p.hospital_id} </td>
                                < td className="border px-4 py-2" > {p.hospital_name} </td>
                                < td className="border px-4 py-2" > {p.patient_name} </td>
                                < td className="border px-4 py-2" > {p.gender} </td>
                                < td className="border px-4 py-2" > {p.age} </td>
                                < td className="border px-4 py-2" > {p.mobile_number} </td>
                                < td className="border px-4 py-2" > {p.address} </td>
                                < td
                                    className="border px-4 py-2 text-blue-600 cursor-pointer font-bold"
                                    onClick={() => setSelectedPatient(p)}
                                >
                                    VIEW
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>

            {/*  Pagination */}
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