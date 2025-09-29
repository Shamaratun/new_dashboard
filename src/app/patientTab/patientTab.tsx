"use client";

import { TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Stethoscope, Clock, StickyNote } from "lucide-react";

export default function PatientTabs() {
  return (
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
  );
}