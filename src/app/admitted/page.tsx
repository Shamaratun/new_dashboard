'use client';
import { ButtonDemo } from "@/components/buttonDemo";
import PatientProfileById from "../patientProfile/patientProfileById";
import { fetchPatientById } from "../patientProfile/fetchPatientById";


   export default async function GetPatientById() {
  


   return (
      <div className="p-4 sm:p-6 max-w-5xl mx-auto space-y-0.5 bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen">

         <ButtonDemo />
         <PatientProfileById />

      </div>
   );
}