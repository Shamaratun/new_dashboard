// "use client";
// import { useEffect, useState } from "react";
// import PatientBasicCard from "./patientBasicCard";
// import { useParams, useRouter } from "next/navigation";
// import { fetchPatientById } from "./fetchPatientById";
// import { AdmissionItem, CombinedPatient } from "@/components/type";



// interface PatientProfilePageProps {
//   id: number;
// }
// export default function PatientProfilePage({ id }: PatientProfilePageProps) {
//   const [selectedPatient, setSelectedPatient] = useState<CombinedPatient | null>(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     async function loadData() {
//       try {
//         await fetchPatientById(id).then((res) => {

//           console.log(res)
//           const latestAdmission = (res.data.admissions as AdmissionItem[])
//   .find(a => a.admission_data)?.admission_data;
//           if (!res.patient_basic) {
//             console.error("No patient basic info found");
//             setLoading(false);
//             return;
//           }

//           // Combine patient_basic + latest admission
//           const combinedPatient: CombinedPatient = {
//             ...res.patient_basic,
//             admission_id: latestAdmission?.id ?? 0,
//             hospital_name: latestAdmission?.hospital_name ?? "",
//             hospital_id: latestAdmission?.hospital_id,
//             adm_status: latestAdmission?.adm_status,
//             date_of_adm: latestAdmission?.date_of_adm,
//             referral_source_name: latestAdmission?.referral_source_name,
//             admission_remarks: latestAdmission?.remarks,
//           };

//           setSelectedPatient(combinedPatient);
//           // if (loading) return <p className="text-center text-gray-500">Loading...</p>;
//           // if (!selectedPatient) return <p>No patient found</p>;

//           //          if (res.data?.patient_basic) {
//           //            setSelectedPatient(res.data.patient_basic);

//           setLoading(false);
//         });
//       } catch (err) {
//         console.error("Error:", err);
//       } finally {
//         setLoading(false);
//       }
//     }
//     if (id) loadData();
//   }, [id]);

//   if (loading) return <p className="text-center text-gray-500">Loading...</p>;
//   if (!selectedPatient) return <p>No patient found</p>;

//   return (
//     <div className="p-6">
//       <PatientBasicCard patient={selectedPatient} />
//     </div>
//   );
// }
"use client";

import { useEffect, useState } from "react";
import { fetchPatientById } from "@/app/patientProfile/fetchPatientById";
import { Patientt } from "./abcType";
import PatientBasicCard from "./patientBasicCard";
import PatientTabs from "../patientTab/patientTab";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import SurgicalInfo from "../surgical/surgicalInfo";
import MedicalInfo from "../medical/medicalInfo";
import Investigation from "../investigation/investigation";
import { ButtonDemo } from "@/components/buttonDemo";
import { AdmissionItem, CombinedPatient } from "@/components/type";
interface PatientProfilePageProps {
  id: number;
}

export default function PatientProfilePage({ id }: PatientProfilePageProps) {
  const [selectedPatient, setSelectedPatient] = useState<CombinedPatient | null>(null);
  const [loading, setLoading] = useState(true);
  const [openSurgicalInfo, setOpenSurgicalInfo] = useState(false);
  const [openMedicalInfo, setOpenMedicalInfo] = useState(false);
  const [openInvestigationInfo, setOpenInvestigationInfo] = useState(false);
  useEffect(() => {
    async function loadData() {
      try {
        const res = await fetchPatientById(id);
        const latestAdmission = (res.data.admissions as AdmissionItem[])
          .find(a => a.admission_data)?.admission_data;

        if (!res.data.patient_basic) {
          console.error("No patient basic info found");
          setLoading(false);
          return;
        }

        const combinedPatient: CombinedPatient = {
          ...res.data.patient_basic,
          admission_id: latestAdmission?.id ?? 0,
          hospital_name: latestAdmission?.hospital_name ?? "",
          hospital_id: latestAdmission?.hospital_id,
          adm_status: latestAdmission?.adm_status,
          date_of_adm: latestAdmission?.date_of_adm,
          referral_source_name: latestAdmission?.referral_source_name,
          admission_remarks: latestAdmission?.remarks,
        };

        setSelectedPatient(combinedPatient);
      } catch (err) {
        console.error("Error:", err);
      } finally {
        setLoading(false);
      }
    }

    if (id) loadData();
  }, [id]);

  if (loading) return <p className="text-center text-gray-500">Loading...</p>;
  if (!selectedPatient) return <p>No patient found</p>;

  return (
    <div className="p-4 sm:p-6 max-w-5xl mx-auto space-y-0.5 bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen">
      <ButtonDemo />
      <PatientBasicCard patient={selectedPatient} />
      <div>
        <div className="w-full p-4 msm:p-6">
          <Tabs defaultValue="medical-history" className="w-full">
            <PatientTabs />

            <TabsContent value="medical-history">
              <Card className="mt-4">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex flex-col space-y-2 min-w-full">
                    <button
                      className="w-50 text-left px-3 py-2 rounded-md bg-gray-100 hover:bg-gray-200 font-medium"
                      onClick={() => setOpenSurgicalInfo((prev) => !prev)}
                    >
                      Surgical Info
                    </button>
                    {openSurgicalInfo && (
                      <div className="bg-white p-3 sm:p-4 rounded-xl shadow mt-2 overflow-x-auto">
                        <SurgicalInfo />

                      </div>)}
                    <button

                      className="w-50  text-left px-3 py-2 rounded-md bg-gray-100 hover:bg-gray-200 font-medium"
                      onClick={() => setOpenMedicalInfo((prev) => !prev)}
                    >
                      Medical Info
                    </button>
                    {openMedicalInfo && (
                      <div className="bg-white p-3 sm:p-4 rounded-xl shadow mt-2 overflow-x-auto">
                        <MedicalInfo />

                      </div>
                    )}

                    <button
                      className="w-50  text-left px-3 py-2 rounded-md bg-gray-100 hover:bg-gray-200 font-medium"
                      onClick={() => setOpenInvestigationInfo((prev) => !prev)}
                    >
                      Investigation
                    </button>
                    {openInvestigationInfo && (
                      <div className="bg-white p-3 sm:p-4 rounded-xl shadow mt-2 overflow-x-auto">
                        <Investigation />
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Recent Visits */}
            <TabsContent value="recent-visits">
              <Card className="mt-4">
                <CardContent>
                  <p className="text-sm sm:text-base">
                    Recent visit details will be shown here.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Notes */}
            <TabsContent value="notes">
              <Card className="mt-4">
                <CardContent>
                  <p className="text-sm sm:text-base">
                    Doctor or nurse notes will be shown here.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          {/* File Upload */}
          <div className="mt-6 mb-4">
            <label className="bg-blue-500 text-white px-4 py-2 rounded-lg w-full sm:w-auto cursor-pointer hover:bg-blue-600 transition block text-center sm:inline-block">
              <input
                type="file"
                className="hidden"
                onChange={(e) => console.log(e.target.files)}
              />
              Upload File
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}