
import PatientProfileById from "./patientProfile/patientProfileById";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        {/* <Header /> */}
       {/* <FollowupList />  */}      
       {/* <PatientProfile/> */}
       <PatientProfileById patient_id={35} admission_id={7}/>
      
      </main>
      
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <div className="mb-4">
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg w-full sm:w-auto ">
          File Upload
        </button>
      </div><br />
       <p>© 2025 Your Company. All rights reserved.</p> 
      </footer>
    </div>
  );
}
