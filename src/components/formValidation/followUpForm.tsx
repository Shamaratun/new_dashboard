
"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

// Zod schema
const FormSchema = z.object({
  doctor: z.string().min(1, "Doctor is required"),
  followup_date: z.string().min(1, "Follow-up Date is required"),
  followup_start_time: z.string().min(1, "Start Time is required"),
  followup_end_time: z.string().min(1, "End Time is required"),
  followup_type: z.string().min(1, "Follow-up Type is required"),
  notes: z.string().optional(),
});


type FormData = z.infer<typeof FormSchema>;

const FollowupForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(FormSchema),
    // defaultValues: {
    //   doctor: "",
    //   followup_date: "",
    //   followup_start_time: "",
    //   followup_end_time: "",
    //   followup_type: "",
    //   notes: "",
    // },
  });

  const onSubmit = (data: FormData) => {
    console.log("Submitted Data:", data);
    alert(JSON.stringify(data, null, 2));
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 max-w-lg mx-auto mt-10 p-4 bg-gray-100 rounded-lg">
      {/* Doctor */}
      <div>
        <label className="block font-medium text-gray-700">Doctor *</label>
        <input
          {...register("doctor")}
          placeholder="Select doctor"
          className="mt-1 block w-full rounded border border-gray-300 p-2"
        />
        {errors.doctor && <p className="text-red-600 text-sm">{errors.doctor.message}</p>}
      </div>

      {/* Follow-up Date */}
      <div>
        <label className="block font-medium text-gray-700">Follow-up Date *</label>
        <input
          {...register("followup_date")}
          type="date"
          className="mt-1 block w-full rounded border border-gray-300 p-2"
        />
        {errors.followup_date && <p className="text-red-600 text-sm">{errors.followup_date.message}</p>}
      </div>

      {/* Start & End Time */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block font-medium text-gray-700">Follow-up Start Time</label>
          <input
            {...register("followup_start_time")}
            type="time"
            className="mt-1 block w-full rounded border border-gray-300 p-2"
          />
          {errors.followup_start_time && <p className="text-red-600 text-sm">{errors.followup_start_time.message}</p>}
        </div>
        <div>
          <label className="block font-medium text-gray-700">Follow-up End Time</label>
          <input
            {...register("followup_end_time")}
            type="time"
            className="mt-1 block w-full rounded border border-gray-300 p-2"
          />
          {errors.followup_end_time && <p className="text-red-600 text-sm">{errors.followup_end_time.message}</p>}
        </div>
      </div>


      <div>
        <label className="block font-medium text-gray-700">Follow-up Type *</label>
        <input
          {...register("followup_type")}
          placeholder="Enter follow-up type"
          className="mt-1 block w-full rounded border border-gray-300 p-2"
        />
        {errors.followup_type && <p className="text-red-600 text-sm">{errors.followup_type.message}</p>}
      </div>

      {/* Notes */}
      <div>
        <label className="block font-medium text-gray-700">Notes</label>
        <textarea
          {...register("notes")}
          placeholder="Enter notes"
          className="mt-1 block w-full rounded border border-gray-300 p-2"
        />
      </div>

      {/* Buttons */}
      <div className="flex gap-2">
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Save & Schedule</button>
        <button type="button" onClick={() => reset()} className="bg-yellow-400 px-4 py-2 rounded hover:bg-yellow-500">Reset</button>
        <button type="button" className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400">Cancel</button>
      </div>
    </form>
  );
};

export default FollowupForm;
