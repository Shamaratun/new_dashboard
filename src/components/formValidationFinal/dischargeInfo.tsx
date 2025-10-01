"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { TextField, TextAreaField, CheckboxField, RadioField, DateField } from "./reusableForm";
import FollowupForm from "./followUpForm";

const FormSchema = z.object({
    discharge_date: z.string().min(1, "Discharge date is required"),
    advice: z.string().min(1, "Advice is required"),
    fu_procedure: z.string().optional(),
    followup_required: z.boolean(),
    //   followup_notes: z.string().optional(),
    outcome: z.string().min(1, "Outcome is required"),
});

type FormData = z.infer<typeof FormSchema>;

export default function DischargeInfo() {
    const form = useForm<FormData>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            advice: "",
            fu_procedure: "",
            followup_required: false,
            //   followup_notes: "",
            outcome: "",
        },
    });

    const followupRequired = form.watch("followup_required");
    const discharge_date = form.watch("discharge_date");
    const advice = form.watch("advice");
    const fu_procedure = form.watch("fu_procedure");
    const outcome = form.watch("outcome");
    const canCheckFollowup = discharge_date && advice && fu_procedure && outcome;

    const onSubmit = (data: FormData) => {
        console.log("Submitted:", data);
        form.reset();
    };

    return (
        <div className="flex flex-col md:flex-row gap-6 bg-gray-100 p-6 rounded-lg">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 w-1/2 bg-gray-50 p-4 rounded shadow ml-0 mt-10">
                    <DateField control={form.control} name="discharge_date" label="Date of Discharge" />
                    <TextAreaField control={form.control} name="advice" label="Advice on Discharge" placeholder="Enter discharge advice" />
                    <TextField control={form.control} name="fu_procedure" label="Follow-up Procedure" placeholder="Enter follow-up procedure" />
                    <RadioField control={form.control} name="outcome" label="Outcome" options={["Excellent", "Sufficient", "Average"]} />
                    <CheckboxField control={form.control} name="followup_required" label="Follow-up Required" canCheck={!!canCheckFollowup} />
                    {/* <Button type="submit" className="w-full">Submit Advice</Button> */}
                </form>
            </Form>
            {followupRequired && (

                <div className="w-1/2 bg-gray-50 p-4 rounded shadow">
                    <FollowupForm />
                </div>
            )}
        </div>
    );
}