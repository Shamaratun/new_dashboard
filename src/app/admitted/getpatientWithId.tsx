// 'use client';

// import { useEffect, useState } from "react";
// import { useParams, useRouter } from "next/navigation";
// import { Patient } from "../../components/type";
// import { getPatientsWithAdmission } from "./getPatientWithAdmission";

// export default function GetPatientWithId() {
//     const { id } = useParams(); // patient_id from URL
//     const router = useRouter();
//     const [patient, setPatient] = useState<Patient | null>(null);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         async function loadPatient() {
//             try {
//                 const res = await getPatientsWithAdmission();
// const found = res.data.find((p: Patient) => p.patient_id === Number(id));                setPatient(found || null);
//             } catch (err) {
//                 console.error(err);
//             } finally {
//                 setLoading(false);
//             }
//         }

//         loadPatient();
//     }, [id]);

//     if (loading) return <p className="text-center mt-10">Loading...</p>;
//     if (!patient) return <p className="text-center mt-10">Patient not found.</p>;

//     return (
//         <div className="p-6 max-w-3xl mx-auto">
//             {/* Back Button */}
//             <button
//                 onClick={() => router.back()} // go back to the previous page
//                 className="mb-4 px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition"
//             >
//                 ← Back
//             </button>

//             <h1 className="text-2xl font-bold mb-4">{patient.patient_name}</h1>
//             <div className="space-y-2 bg-white p-6 rounded-lg shadow">
//                 <p><span className="font-semibold">Admission ID:</span> {patient.admission_id}</p>
//                 <p><span className="font-semibold">Patient ID:</span> {patient.patient_id}</p>
//                 <p><span className="font-semibold">Gender:</span> {patient.gender}</p>
//                 <p><span className="font-semibold">Age:</span> {patient.age}</p>
//                 <p><span className="font-semibold">Mobile:</span> {patient.mobile_number}</p>
//                 <p><span className="font-semibold">Address:</span> {patient.address}</p>
//                 <p><span className="font-semibold">Hospital:</span> {patient.hospital_name}</p>
//                 <p><span className="font-semibold">Hospital ID:</span> {patient.hospital_id}</p>
//             </div>
//         </div>
//     );
// }