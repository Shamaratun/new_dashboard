import Link from "next/link"
import  { useRouter } from "next/navigation"

export default function Medical() {
     const router = useRouter();
    return (

        
       <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div className="bg-white p-4 rounded-xl shadow">
         <button onClick={() => router.push("/medicalHistory")} className="font-semibold text-blue-600 mb-2">Surgical Info</button>
          <p className="text-gray-500">No surgical information available.</p>
        </div>
        <div className="bg-white p-4 rounded-xl shadow"></div>
      </div>
    );}