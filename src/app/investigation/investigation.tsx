import { medicalInfoDummy } from "../medical/medicalInfoDummy";
import { investigationsDummy } from "./investigationDummy";



export default function PatientMedicalSection() {
  return (
    <div className="space-y-6">

  {/* Medical Information Table */}
  <div className="bg-white p-4 rounded-xl shadow overflow-x-auto">
    <h2 className="font-semibold text-green-600 mb-4 text-lg">Medical Information</h2>

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
    {medicalInfoDummy.conditions.length === 0 && (
      <p className="text-gray-500 mt-2">No medical information available.</p>
    )}
  </div>

  {/* Investigations Table */}
  <div className="bg-white p-6 rounded-2xl shadow-lg overflow-x-auto">
  <h2 className="font-bold text-yellow-600 text-2xl mb-6">Investigations</h2>

  <table className="min-w-full table-auto border-collapse">
    <thead className="bg-yellow-200">
      <tr>
        <th className="text-left p-3 border-b-2 border-yellow-300 text-sm font-semibold text-gray-700 uppercase tracking-wide">Test</th>
        <th className="text-left p-3 border-b-2 border-yellow-300 text-sm font-semibold text-gray-700 uppercase tracking-wide">Date</th>
        <th className="text-left p-3 border-b-2 border-yellow-300 text-sm font-semibold text-gray-700 uppercase tracking-wide">Result</th>
        <th className="text-left p-3 border-b-2 border-yellow-300 text-sm font-semibold text-gray-700 uppercase tracking-wide">Doctor</th>
        <th className="text-left p-3 border-b-2 border-yellow-300 text-sm font-semibold text-gray-700 uppercase tracking-wide">Notes</th>
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
    {investigationsDummy.investigations.length === 0 && (
      <p className="text-gray-500 mt-2">No investigations available.</p>
    )}
  </div>

</div>
    );  }