

export default function ExportPatient() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-6 rounded-xl shadow-md">
                <h1 className="text-xl font-bold text-gray-800">Export Patient Page</h1>
                <p className="text-gray-600 mt-2">Here you can export patient details.</p>
                <div className="flex flex-col sm:flex-row sm:space-x-2 space-y-2 sm:space-y-0 mt-2">
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg w-full sm:w-auto">Export PDF</button>
                    <button className="bg-green-600 text-white px-4 py-2 rounded-lg w-full sm:w-auto">Export CSV</button>
                    <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg w-full sm:w-auto">Export Excel</button>
                </div>
            </div>
        </div>
    );
}