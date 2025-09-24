// "use client";
// import { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";
// import Link from "next/link";
// import { Patient } from "@/components/type";
// import { fetchPatients } from "./fetchPatients";

// export default function PatientProfile() {
//   const router = useRouter();

//   const [patients, setPatients] = useState<Patient[]>([]);
//   const [loading, setLoading] = useState(true);
 

//   const [selectedPatient ] = useState<Patient | null>(null);

//   useEffect(() => {
//     async function loadData() {
//      try {
//                   await fetchPatients().then((res) => {
//                      console.log(res)
//                      setPatients(res.data || []);
//                      setLoading(false);
//                    });
//                  } catch (err) {
//                      console.error("Error:", err);
//                  } finally {
//                      setLoading(false);
//                  }
//              }
//              loadData();
//          }, []);
     
//          if (loading)
//              return <p className="text-center text-gray-500" > Loading...</p>;
     
//          if (!patients.length)
//              return <p className="text-center text-gray-500" > No patients found </p>;
     

//   return (
//     <div className = "p-6">
     
//       {
//     selectedPatient && (
//       <div className="mb-6 p-4 bg-white rounded-xl shadow max-w-5xl mx-auto">
//         <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">
//           {selectedPatient.patient_name}
//         </h1>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-4 mb-4 text-gray-700">
//           <p><span className="font-semibold">ID:</span> {selectedPatient.patient_id}</p>
//           <p><span className="font-semibold">Age:</span> {selectedPatient.age}</p>
//           <p><span className="font-semibold">Gender:</span> {selectedPatient.gender}</p>
//           <p><span className="font-semibold">Phone:</span> {selectedPatient.mobile_number}</p>
//           <p><span className="font-semibold">Hospital:</span> {selectedPatient.hospital_name}</p>
//         </div>

//         <div className="flex flex-col sm:flex-row sm:space-x-3 space-y-2 sm:space-y-0 mb-4">
//           <button onClick={() => router.push("/sharePatient")} className="bg-white text-blue-600 px-4 py-2 rounded-lg shadow hover:bg-blue-50 transition">
//             Share
//           </button>
//           <button onClick={() => router.push("/export")} className="bg-white text-blue-600 px-4 py-2 rounded-lg shadow hover:bg-blue-50 transition">
//             Export
//           </button>
//           <button onClick={() => router.push("/editPatient")} className="bg-white text-blue-600 px-4 py-2 rounded-lg shadow hover:bg-blue-50 transition">
//             Edit
//           </button>
          
//         </div>
//       </div>
//     )
//   }
//       <div className="flex flex-col sm:flex-row sm:space-x-3 space-y-2 sm:space-y-0 mb-4">
//         <button onClick={() => router.push("/sharePatient")} className="bg-white text-blue-600 px-4 py-2 rounded-lg shadow hover:bg-blue-50 transition">
//           Share
//         </button>
//         <button onClick={() => router.push("/export")} className="bg-white text-blue-600 px-4 py-2 rounded-lg shadow hover:bg-blue-50 transition">
//           Export
//         </button>
//         <button onClick={() => router.push("/editPatient")}
//           className="bg-white text-blue-600 px-4 py-2 rounded-lg shadow hover:bg-blue-50 transition"
//         >          Edit
//         </button>
//         <Link href="/sharePatient"> link</Link>
//       </div>

    
//         <div className="flex flex-col sm:flex-row sm:space-x-2 space-y-2 sm:space-y-0 border-b-2 border-gray-200 mb-4">
//           <button onClick={() => router.push("/medicalHistory")} className="px-3 py-2 text-gray-950 bg-cyan-300 rounded-lg hover:bg-cyan-400 transition">
//             Medical History
//           </button>
//           <button onClick={() => router.push("/export")} className="px-3 py-2 text-gray-950 bg-cyan-300 rounded-lg hover:bg-cyan-400 transition">
//             Recent Visits
//           </button>
//           <button onClick={() => router.push("/export")} className="px-3 py-2 text-gray-950 bg-cyan-300 rounded-lg hover:bg-cyan-400 transition">
//             Notes
//           </button>
//         </div>


//       </div >
//   );
// }
