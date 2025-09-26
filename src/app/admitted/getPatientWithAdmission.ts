"use server";

export async function getPatientsWithAdmission() {

    const res = await fetch(
      "https://sdms-api.onrender.com/api/v1/patientData/getList",
      {
        method: "POST",
        headers: {
           "Content-Type": "application/json" 
          },
        body: JSON.stringify({
           action_mode: "patient_with_admission",
          }),
        cache: "no-store",
      }
    );
console.log(res.json)
    if (!res.status.toString().startsWith("2")) {
    throw new Error("Failed to fetch data");
  }

  return res.json(); 
}
