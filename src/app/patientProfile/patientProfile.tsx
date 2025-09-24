"use client";
import { useRouter } from "next/navigation";
import Link from 'next/link';
// type PatientProfileProps = {
//   patientData: {
//     id: string;
//     name: string;
//     age: number;
//     gender: string;
//     phone: string;
//     admissionDate: string;
//     hospital: string;
//   };
// };

export default function PatientProfile({ patientData }: PatientProfileProps) {
  const router = useRouter();

  return (
    <div className="p-4 sm:p-6 lg:p-8 bg-white rounded-xl shadow max-w-5xl mx-auto">
      {/* Header */}
      <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">{patientData.name}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-4 mb-4 text-gray-700">
        <p><span className="font-semibold">ID:</span> {patientData.id}</p>
        <p><span className="font-semibold">Age:</span> {patientData.age}</p>
        <p><span className="font-semibold">Gender:</span> {patientData.gender}</p>
        <p><span className="font-semibold">Phone:</span> {patientData.phone}</p>
        <p><span className="font-semibold">Admission Date:</span> {patientData.admissionDate}</p>
        <p><span className="font-semibold">Hospital:</span> {patientData.hospital}</p>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row sm:space-x-3 space-y-2 sm:space-y-0 mb-4">
        <button onClick={() => router.push("/sharePatient")} className="bg-white text-blue-600 px-4 py-2 rounded-lg shadow hover:bg-blue-50 transition">
          Share
        </button>
        <button onClick={() => router.push("/export")} className="bg-white text-blue-600 px-4 py-2 rounded-lg shadow hover:bg-blue-50 transition">
          Export
        </button>
        <button onClick={() => router.push("/editPatient")}
          className="bg-white text-blue-600 px-4 py-2 rounded-lg shadow hover:bg-blue-50 transition"
        >          Edit
        </button>
        <Link href="/sharePatient"> link</Link>
      </div>

      {/* Tabs */}

      {/* <div className="flex flex-col sm:flex-row sm:space-x-3 space-y-2 sm:space-y-0 mb-4">
        <button onClick={() => router.push("/medicalHistory")} className="px-3 py-2 text-gray-950 bg-cyan-300 rounded-lg hover:bg-cyan-400 transition">
          Medical History

        </button> */}
        <div className="flex flex-col sm:flex-row sm:space-x-2 space-y-2 sm:space-y-0 border-b-2 border-gray-200 mb-4">
          <button onClick={() => router.push("/medicalHistory")} className="px-3 py-2 text-gray-950 bg-cyan-300 rounded-lg hover:bg-cyan-400 transition">
            Medical History
          </button>
          <button onClick={() => router.push("/export")} className="px-3 py-2 text-gray-950 bg-cyan-300 rounded-lg hover:bg-cyan-400 transition">
            Recent Visits
          </button>
          <button onClick={() => router.push("/export")} className="px-3 py-2 text-gray-950 bg-cyan-300 rounded-lg hover:bg-cyan-400 transition">
            Notes
          </button>
        </div>

        {/* Main Content */}
        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div className="bg-white p-4 rounded-xl shadow">
         <button onClick={() => router.push("/surgical")} className="font-semibold text-blue-600 mb-2">Surgical Info</button>
          <p className="text-gray-500">No surgical information available.</p>
        </div>
        <div className="bg-white p-4 rounded-xl shadow"></div>
      </div>*/}

        {/* Medical Info */}
        {/* <button onClick={() => router.push("/medical")} className="bg-white p-4 rounded-xl shadow mb-4">
        <h2 className="font-semibold text-green-600 mb-2">Medical Information</h2>
        <p className="text-gray-500">No medical info available.</p>
      </button><br />*/}

        {/* Investigations */}
        {/* <button onClick={() => router.push("/investigation")}  className="bg-white p-4 rounded-xl shadow mb-4">
        <h2 className="font-semibold text-yellow-600 mb-2">Investigations</h2>
        <p className="text-gray-500">No investigations found.</p>
      </button> */}


      </div>
    // </div>
  );
}