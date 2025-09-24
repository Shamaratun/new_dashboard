import { medicalInfoDummy } from "./medicalInfoDummy";

export default function MedicalInfo() {
  return (
  <div className="bg-white p-4 rounded-xl shadow mb-4 overflow-x-auto">
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
  );
}