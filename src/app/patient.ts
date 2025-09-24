"use server";

type PatientProfileResponse = {
  // Adjust this type based on your API response
  patientId: number;
  name: string;
  age: number;
  gender: string;
  phone: string;
  admissionDate: string;
  hospital: string;
};

export async function getPatientProfile(patientId: number, admissionId: number): Promise<PatientProfileResponse> {
  const res = await fetch(
    "https://sdms-api.onrender.com/api/v1/patientProfile/getProfile",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        action_mode: "get_profile",
        patient_id: 35,
        admission_id: 7,
      }),
      cache: "no-store",
      });
  console.log(res.json)
  if
    (!res.status.toString().startsWith("2"))
     { throw new Error("Failed to fetch data"); }
  return res.json();
}