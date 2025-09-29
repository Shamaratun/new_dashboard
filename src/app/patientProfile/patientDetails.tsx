import { CombinedPatient } from "@/components/type";
import PatientInfoRow from "./patientInfoRow";


export default function PatientDetails({ patient }: { patient: CombinedPatient }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      <PatientInfoRow label="Patient ID" value={patient.id} />
      <PatientInfoRow label="Admission ID" value={patient.admission_id} />
      <PatientInfoRow label="Age" value={patient.age} />
      <PatientInfoRow label="Gender" value={patient.gender} />
      <PatientInfoRow label="Mobile" value={patient.mobile_number} />
      <PatientInfoRow label="Address" value={patient.address_line_one} />      
      <PatientInfoRow label="Hospital Name" className="flex items-center col-span-2" value={patient.hospital_name} />
  
    </div>
  );
}