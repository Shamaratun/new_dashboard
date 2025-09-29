import { medicalInfoDummy } from "../medical/medicalInfoDummy";
import { investigationsDummy } from "./investigationDummy";



export default function PatientMedicalSection() {
  return (
    <div className="space-y-6">

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