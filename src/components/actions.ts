"use server";
export async function getTodaysFollowups() {
  const res = await fetch
    ("https://sdms-api.onrender.com/api/v1/patientData/getList",
      {
        method: "POST",
        headers: { "Content-Type": "application/json", },
        body: JSON.stringify({
          action_mode: "todays_followup_scheduled_patient",
        }),
        cache: "no-store",
      });
  console.log(res.json)
  if
    (!res.status.toString().startsWith("2")) { throw new Error("Failed to fetch data"); }
  return res.json();
}