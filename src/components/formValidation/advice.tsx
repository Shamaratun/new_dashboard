"use client";
import React, { ChangeEvent } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import DischargeDate from "./dischargeDate";
import FollowupForm from "./followUpForm";


const FormSchema = z.object({
    advice: z.string().min(1, "Advice is required"),
    fu_procedure: z.string().optional(),
    followup_required: z.boolean(),
    followup_notes: z.string().optional(),
    outcome: z.string(),
});


type FormData = z.infer<typeof FormSchema>;
export default function AdviceForm() {
const {
    register,
    reset,
    watch,
    handleSubmit,
    formState: { errors },
} = useForm<FormData>({
    resolver: zodResolver(FormSchema),
});
const onSubmit = (data: FormData) => {
    console.log("Submitted:", data);
    reset();
};

const followupRequired = watch("followup_required");


    function handleChange(event: ChangeEvent<HTMLInputElement>): void {
        throw new Error("Function not implemented.");
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 max-w-5xl mx-auto mt-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                    <div>
                        <DischargeDate />
                    </div>

                    {/* Advice on Discharge */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Advice on Discharge</label>
                        <textarea
                            {...register("advice")}
                            placeholder="Enter discharge advice"
                            className="mt-1 block w-full rounded-lg border border-gray-300 p-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                        {errors.advice && <p className="text-red-600 text-sm mt-1">{errors.advice.message}</p>}
                    </div>

                    {/* Follow-up Procedure */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Follow-up Procedure</label>
                        <input
                            {...register("fu_procedure")}
                            placeholder="Enter follow-up procedure"
                            className="mt-1 block w-full rounded-lg border border-gray-300 p-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                        {errors.fu_procedure && <p className="text-red-600 text-sm mt-1">{errors.fu_procedure.message}</p>}
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Outcome
                        </label>
                        <div className="flex gap-6 mt-2">
                            {["Excellent", "Sufficient", "Average"].map((option) => (
                                <label key={option} className="flex items-center gap-2">
                                    <input
                                        type="radio"
                                        value={option}
                                        {...register("outcome")}
                                        className="text-blue-600 focus:ring-blue-500"
                                    />
                                    <span className="text-sm text-gray-700">{option}</span>
                                </label>
                            ))}
                        </div>
                        {errors.outcome && (
                            <p className="text-red-600 text-sm mt-1">{errors.outcome.message}</p>
                        )}
                    </div>
                    {/* Follow-up Required Checkbox */}
                    <div className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            {...register("followup_required")}
                            className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                        />
                        <label className="text-sm font-medium text-gray-700">Follow-up Required</label>
                    </div>
                </div>
                {followupRequired && (
                    <FollowupForm />
                )}

            </div>
            <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
            >
                Submit Advice
            </button>
        </form>
    );
};

