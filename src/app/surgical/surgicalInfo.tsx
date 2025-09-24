import { surgicalInfoDummy } from "./surgicalInfoDummy ";

export default function SurgicalInfo() {
  return (
<div className="bg-white p-4 rounded-xl shadow mb-4 overflow-x-auto">
  <h2 className="font-semibold text-blue-600 mb-4 text-lg">Surgical Info</h2>

  <table className="min-w-full border border-gray-200">
    <thead className="bg-blue-100">
      <tr>
        <th className="text-left p-2 border-b">Surgery</th>
        <th className="text-left p-2 border-b">Date</th>
        <th className="text-left p-2 border-b">Surgeon</th>
        <th className="text-left p-2 border-b">Hospital</th>
        <th className="text-left p-2 border-b">Notes</th>
      </tr>
    </thead>
    <tbody>
      {surgicalInfoDummy.surgeries.map((surgery) => (
        <tr key={surgery.surgeryId} className="hover:bg-gray-50">
          <td className="p-2 border-b">{surgery.surgeryName}</td>
          <td className="p-2 border-b">{surgery.date}</td>
          <td className="p-2 border-b">{surgery.surgeon}</td>
          <td className="p-2 border-b">{surgery.hospital}</td>
          <td className="p-2 border-b">{surgery.notes}</td>
        </tr>
      ))}
    </tbody>
  </table>

  {surgicalInfoDummy.surgeries.length === 0 && (
    <p className="text-gray-500 mt-2">No surgical information available.</p>
  )}
</div>
  );
}