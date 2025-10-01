"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// ---------------- Zod schema ----------------
const FormSchema = z.object({
  discharge_date: z
    .string()
    .min(1, "Discharge date is required")
    .refine((val) => !isNaN(Date.parse(val)), {
      message: "Invalid date",
    }),
});

// ---------------- TypeScript type ----------------
type FormData = z.infer<typeof FormSchema>;

// ---------------- Component ----------------
const DateForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      discharge_date: "",
    },
  });

  const onSubmit = (data: FormData) => {
    // console.log("Submitted date:", data.discharge_date);
    // alert(`✅ Submitted date: ${data.discharge_date}`);
    reset();
  };

  return (
   
        <div>
          <label className="block mb-1 text-gray-700">Discharge Date</label>
          <input
            type="datetime-local"
            {...register("discharge_date")}
            className="w-full p-2 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.discharge_date && (
            <p className="text-red-600 text-sm mt-1">{errors.discharge_date.message}</p>
          )}
        </div>

        
     
  );
};

export default DateForm;
