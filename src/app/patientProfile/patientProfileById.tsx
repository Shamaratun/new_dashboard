'use client';
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { medicalInfoDummy } from "../medical/medicalInfoDummy";
import { investigationsDummy } from "../investigation/investigationDummy";
import { surgicalInfoDummy } from "../surgical/surgicalInfoDummy ";

import {
  Share2,
  FileDown,
  Edit3,
  Stethoscope,
  Clock,
  StickyNote,
} from "lucide-react";

import { abcPatients } from "./abcPatients";
import { Patientt } from "./abcType";
import PatientBasicCard from "./patientBasicCard";
import SurgicalInfo from "../surgical/surgicalInfo";
import MedicalInfo from "../medical/medicalInfo";
import Investigation from "../investigation/investigation";
import PatientTabs from "../patientTab/patientTab";



export default function PatientProfileById() {
  const [openSurgicalInfo, setOpenSurgicalInfo] = useState(false);
  const [openMedicalInfo, setOpenMedicalInfo] = useState(false);
  const [openInvestigationInfo, setOpenInvestigationInfo] = useState(false);

  const [selectedPatient, setSelectedPatient] = useState<Patientt | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter()
  useEffect(() => {
    async function loadData() {
      try {
        await abcPatients(35, 7).then((res) => {

          console.log(res)

          if (res.data?.patient_basic) {
            setSelectedPatient(res.data.patient_basic);
          }


          setLoading(false);
        });
      } catch (err) {
        console.error("Error:", err);
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, []);

  if (loading) return <p className="text-center text-gray-500">Loading...</p>;
  if (!selectedPatient) return <p className="text-center text-gray-500">No patient found</p>;

  return (
    <div className="p-4 sm:p-6 max-w-5xl mx-auto space-y-0.5 bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen">
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