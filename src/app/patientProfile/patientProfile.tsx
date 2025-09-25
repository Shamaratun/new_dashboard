"use client";

import { useEffect, useState } from "react";
import { abcPatients } from "./abcPatients";


// interface Admission {
//   admission_data: {
//     id: number;
//     date_of_adm: string;
//     adm_status: string;
//     remarks: string;
//     hospital_id: number;
//   };
// }
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

  useEffect(() => {
    async function loadData() {
      try {
         await abcPatients( 35, 7).then((res) => {

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
    <div className="p-6 max-w-5xl mx-auto space-y-6">
      <div className="bg-white shadow-lg rounded-xl p-6">
        <h1 className="text-2xl font-bold mb-4">{selectedPatient.name}</h1>
        <div className="grid grid-cols-2 gap-4 text-gray-700">
             <p><span className="font-semibold">Patient ID:</span> {selectedPatient.id}</p>
        
          <p><span className="font-semibold">Age:</span> {selectedPatient.age}</p>
          <p><span className="font-semibold">Gender:</span> {selectedPatient.gender}</p>
          <p><span className="font-semibold">Mobile:</span> {selectedPatient.mobile_number}</p>
          <p><span className="font-semibold">Marital Status:</span> {selectedPatient.marital_status}</p>
          <p><span className="font-semibold">Religion:</span> {selectedPatient.religion}</p>
          <p className="col-span-2"><span className="font-semibold">Address:</span> {selectedPatient.address_line_one}</p>
        </div>
      </div>
       </div>
  );
}

      {/* Admission History Table */}
      {/* <div className="bg-white shadow-lg rounded-xl p-6 overflow-x-auto">
        <h2 className="text-xl font-semibold mb-4">Admission History</h2>
        {admissions.length === 0 ? (
          <p className="text-gray-500">No admissions found</p>
        ) : (
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="p-2">Admission Date</th>
                <th className="p-2">Status</th>
                <th className="p-2">Remarks</th>
                <th className="p-2">Hospital ID</th>
              </tr>
            </thead>
            <tbody>
              {admissions.map((adm, idx) => (
                <tr key={idx} className="border-t hover:bg-gray-50">
                  <td className="p-2">{adm.admission_data?.date_of_adm}</td>
                  <td className="p-2">{adm.admission_data?.adm_status}</td>
                  <td className="p-2">{adm.admission_data?.remarks}</td>
                  <td className="p-2">{adm.admission_data?.hospital_id}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div> */}
   