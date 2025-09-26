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



export default function PatientProfile() {
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
    <div className="p-4 sm:p-6 max-w-6xl mx-auto space-y-6 bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen">
      <div className="bg-white w-4xl shadow-lg rounded-2xl pt-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
            {selectedPatient.name}
          </h1>

          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => router.push("/sharePatient")}
              className="flex items-center gap-2 bg-cyan-100 text-cyan-700 px-3 py-2 rounded-lg shadow-sm hover:bg-cyan-200 transition"
            >
              <Share2 size={18} /> Share
            </button>
            <button
              onClick={() => router.push("/export")}
              className="flex items-center gap-2 bg-purple-100 text-purple-700 px-3 py-2 rounded-lg shadow-sm hover:bg-purple-200 transition"
            >
              <FileDown size={18} /> Export
            </button>
            <button
              onClick={() => router.push("/editPatient")}
              className="flex items-center gap-2 bg-green-100 text-green-700 px-3 py-2 rounded-lg shadow-sm hover:bg-green-200 transition"
            >
              <Edit3 size={18} /> Edit
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700">
          <p className="flex flex-wrap gap-4">
            <span className="font-semibold">Patient ID:</span>{" "}
            {selectedPatient.id}
          
            <span className="font-semibold ">Age:</span> {selectedPatient.age}
          
            <span className="font-semibold">Gender:</span>{" "}
            {selectedPatient.gender}
          </p>
          <p className="flex flex-wrap gap-4">
           
            <span className="font-semibold">Marital Status:</span>{" "}
            {selectedPatient.marital_status}
          
            <span className="font-semibold">Religion:</span>{" "}
            {selectedPatient.religion}
          </p>
          <p className="flex flex-wrap gap-4">
             <span className="font-semibold">Mobile:</span>{" "}
            {selectedPatient.mobile_number}
          
            <span className="font-semibold">Address:</span>{" "}
            {selectedPatient.address_line_one}
          </p>
        </div>
      </div>
      <div>
        <div className="w-full p-4 msm:p-6">
          <Tabs defaultValue="medical-history" className="w-full">
            <TabsList className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 w-full">
              <TabsTrigger
                value="medical-history"
                className="flex items-center gap-2 px-4 py-2 text-sm sm:text-base text-gray-800 bg-cyan-100 rounded-lg hover:bg-cyan-200 transition"
              >
                <Stethoscope size={18} /> Medical History
              </TabsTrigger>
              <TabsTrigger
                value="recent-visits"
                className="flex items-center gap-2 px-4 py-2 text-sm sm:text-base text-gray-800 bg-yellow-100 rounded-lg hover:bg-yellow-200 transition"
              >
                <Clock size={18} /> Recent Visits
              </TabsTrigger>
              <TabsTrigger
                value="notes"
                className="flex items-center gap-2 px-4 py-2 text-sm sm:text-base text-gray-800 bg-pink-100 rounded-lg hover:bg-pink-200 transition"
              >
                <StickyNote size={18} /> Notes
              </TabsTrigger>
            </TabsList>

            <TabsContent value="medical-history">
              <Card className="mt-4">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex flex-col space-y-2 w-full">
                    <button
                      className="w-full text-left px-3 py-2 rounded-md bg-gray-100 hover:bg-gray-200 font-medium"
                      onClick={() => setOpenSurgicalInfo((prev) => !prev)}
                    >
                      Surgical Info
                    </button>
                    {openSurgicalInfo && (
                      <div className="bg-white p-3 sm:p-4 rounded-xl shadow mt-2 overflow-x-auto">
                        <h2 className="font-semibold text-blue-600 mb-4 text-lg">
                          Surgical Info
                        </h2>
                        <table className="min-w-full border border-gray-200 text-sm sm:text-base">
                          <thead className="bg-blue-100">
                            <tr>
                              <th className="text-left p-2 border-b">Surgery</th>
                              <th className="text-left p-2 border-b">Date</th>
                              <th className="text-left p-2 border-b">Surgeon</th>
                              <th className="text-left p-2 border-b">Hospital</th>
                              <th className="text-left p-2 border-b">Notes</th>
                            </tr>
                          </thead>
                          <tbody>
                            {surgicalInfoDummy.surgeries.map((surgery) => (
                              <tr
                                key={surgery.surgeryId}
                                className="hover:bg-gray-50"
                              >
                                <td className="p-2 border-b">
                                  {surgery.surgeryName}
                                </td>
                                <td className="p-2 border-b">{surgery.date}</td>
                                <td className="p-2 border-b">{surgery.surgeon}</td>
                                <td className="p-2 border-b">{surgery.hospital}</td>
                                <td className="p-2 border-b">{surgery.notes}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )}

                    {/* Medical Info */}
                    <button
                      className="w-full text-left px-3 py-2 rounded-md bg-gray-100 hover:bg-gray-200 font-medium"
                      onClick={() => setOpenMedicalInfo((prev) => !prev)}
                    >
                      Medical Info
                    </button>
                    {openMedicalInfo && (
                      <div className="bg-white p-3 sm:p-4 rounded-xl shadow mt-2 overflow-x-auto">
                        <h2 className="font-semibold text-green-600 mb-4 text-lg">
                          Medical Info
                        </h2>
                        <table className="min-w-full border border-gray-200 text-sm sm:text-base">
                          <thead className="bg-green-100">
                            <tr>
                              <th className="text-left p-2 border-b">Condition</th>
                              <th className="text-left p-2 border-b">
                                Diagnosis Date
                              </th>
                              <th className="text-left p-2 border-b">Medications</th>
                              <th className="text-left p-2 border-b">Doctor</th>
                              <th className="text-left p-2 border-b">Notes</th>
                            </tr>
                          </thead>
                          <tbody>
                            {medicalInfoDummy.conditions.map((c, i) => (
                              <tr key={i} className="hover:bg-gray-50">
                                <td className="p-2 border-b">{c.conditionName}</td>
                                <td className="p-2 border-b">{c.diagnosisDate}</td>
                                <td className="p-2 border-b">
                                  {c.medications.join(", ")}
                                </td>
                                <td className="p-2 border-b">{c.doctor}</td>
                                <td className="p-2 border-b">{c.notes}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )}

                    {/* Investigation Info */}
                    <button
                      className="w-full text-left px-3 py-2 rounded-md bg-gray-100 hover:bg-gray-200 font-medium"
                      onClick={() => setOpenInvestigationInfo((prev) => !prev)}
                    >
                      Investigation
                    </button>
                    {openInvestigationInfo && (
                      <div className="bg-white p-3 sm:p-4 rounded-xl shadow mt-2 overflow-x-auto">
                        <h2 className="font-semibold text-blue-600 mb-4 text-lg">
                          Investigation
                        </h2>
                        <table className="min-w-full border border-gray-200 text-sm sm:text-base">
                          <thead className="bg-yellow-200">
                            <tr>
                              <th className="text-left p-2 border-b">Test</th>
                              <th className="text-left p-2 border-b">Date</th>
                              <th className="text-left p-2 border-b">Result</th>
                              <th className="text-left p-2 border-b">Doctor</th>
                              <th className="text-left p-2 border-b">Notes</th>
                            </tr>
                          </thead>
                          <tbody>
                            {investigationsDummy.investigations.map(
                              (i, index) => (
                                <tr
                                  key={i.investigationId}
                                  className={`${index % 2 === 0
                                      ? "bg-yellow-50"
                                      : "bg-yellow-100"
                                    } hover:bg-yellow-200 transition-colors duration-300`}
                                >
                                  <td className="p-2">{i.testName}</td>
                                  <td className="p-2">{i.date}</td>
                                  <td className="p-2">{i.result}</td>
                                  <td className="p-2">{i.doctor}</td>
                                  <td className="p-2">{i.notes}</td>
                                </tr>
                              )
                            )}
                          </tbody>
                        </table>
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