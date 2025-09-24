
export default function SharePatientPage() {
  return (
    <div className="p-6 max-w-3xl mx-auto bg-white rounded-xl shadow mt-6">
      <h1 className="text-2xl font-bold mb-4">Share Patient</h1>
      <p className="text-gray-700">This page is for sharing patient details via email or link.</p>
      <input type="email" placeholder="Recipient email" className="border p-2 rounded w-full mt-2" />
      <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg">Share</button>
    </div>
  );
}