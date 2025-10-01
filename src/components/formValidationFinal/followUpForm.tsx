"use client";
import React from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "../ui/form";
import { DateField, SelectScrollable, TextAreaField, TimeField } from "./reusableForm";

// Zod schema
const FormSchema = z.object({
  doctor: z.string().min(1, "Doctor is required"),
  followup_date: z.string().min(1, "Follow-up Date is required"),
  followup_start_time: z.string().min(1, "Start Time is required"),
  followup_end_time: z.string().min(1, "End Time is required"),
  followup_type: z.string().min(1, "Follow-up Type is required"),
  notes: z.string().optional(),
});

type FollowupFormData = z.infer<typeof FormSchema>;

export default function FollowupForm() {
  const form = useForm<FollowupFormData>({
    resolver: zodResolver(FormSchema),
});
const onSubmit = (data: FollowupFormData) => {
    console.log("Submitted:", data);
    form.reset();
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6 max-w-4xl mx-auto mt-10"
      >
    <SelectScrollable
      control={form.control}
      name="doctors_name"
      label="Doctors Name"
      placeholder="Select Doctors Name"
      
    />
<DateField
          control={form.control}
          name="followup_date"
          label="Follow-up Date"
        />

        {/* Start & End Time */}
        <div className="grid grid-cols-2 gap-4">
          <TimeField
            control={form.control}
            name="followup_start_time"
            label="Start Time"
            placeholder="Select start time"
  
          />
          <TimeField
            control={form.control}
            name="followup_end_time"
            label="End Time"
            placeholder="Select end time"

          />
        </div>

        {/* Follow-up Type */}
        <SelectScrollable
          control={form.control}
          name="followup_type"
          label="Follow-up Type"
          placeholder="Select Follow-up Type"
        />

        {/* Notes */}
        <TextAreaField
          control={form.control}
          name="notes"
          label="Notes"
          placeholder="Enter follow-up advice"
        />

        {/* Buttons */}
        <div className="flex gap-2">
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Save & Schedule
          </button>
          <button
            type="button"
            onClick={() => form.reset()}
            className="bg-yellow-400 px-4 py-2 rounded hover:bg-yellow-500"
          >
            Reset
          </button>
          <button
            type="button"
            className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
          >
            Cancel
          </button>
        </div>
      </form>
    </Form>
  );
}
