export interface AdmissionData {
  adm_status: string;
  date_of_adm: string;
  hospital_id?: number; 
  hospital_name: string;
  id: number; // admission_id
  insert_by: string;
  insert_date: string;
  is_active: number;
  referral_source_name: string;
  remarks: string;
  update_by: string | null;
  update_date: string | null;
  
}

export interface AdmissionItem {
  admission_data: AdmissionData | null;
  pre_ops_data: any | null;
  post_ops_data: any | null;
  release_data: any | null;
}

export interface Patient {
  id: number;
  name: string;
  age: number;
  gender: string;
  mobile_number: string;
  address_line_one: string;
  dt: string;
  is_active: number;
  marital_status: string;
  occupation: string;
  patient_generated_uid: string;
  religion: string;
  remarks: string;
  insert_by: string;
  insert_date: string;
  update_by: string | null;
  update_date: string | null;
}
export interface CombinedPatient extends Patient {
  admission_id: number;
  hospital_name: string;
  hospital_id: number;
  adm_status?: string;
  date_of_adm?: string;
  referral_source_name?: string;
  admission_remarks?: string;
}
interface PatientProfileData {
  patient_basic: Patient;
  admissions: AdmissionItem[];
}

// interface PatientProfileResponse {
//   success: boolean;
//   msg: string;
//   data: PatientProfileData;
// }

