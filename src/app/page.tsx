
import AdmissionTable from "@/app/admitted/admissionTable";
import PatientProfileById from "./patientProfile/patientProfileById";
import NotReleasedTable from "@/components/notReleasedTable";
import ImageModal from "@/components/imageStudy/imageModal";
import Header from "@/components/Header";
import FollowupList from "@/components/FollowupList";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        {/* <Header /> */}
        {/* <div><FollowupList /></div> */}
        
        {/* <div><PatientProfileById /></div> */}
        <div> <AdmissionTable /></div>

        {/* <div><NotReleasedTable /></div> */}
        {/* <ImageModal /> */}

      </main>

      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">

        <p>© 2025 Your Company. All rights reserved.</p>
      </footer>
    </div>
  );
}
