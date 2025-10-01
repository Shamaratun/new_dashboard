// "use client";

import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import * as React from "react"
import {
    Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue,
} from "@/components/ui/select"
import { useState } from "react";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { AlertCircleIcon } from "lucide-react";

type BaseFieldProps = {
    control: any;
    name: string;
    label: string;
    placeholder?: string;
    canCheck?: boolean;
    alertMessage?: string;
};


export function SelectScrollable({ control, name, label, placeholder }: BaseFieldProps) {
    return (
        <FormField
            control={control}
            name={name}
            render={({ field }) => (
                <FormItem>
                    <FormLabel>{label}</FormLabel>
                    <Select>
                        <SelectTrigger name={name} className="w-full">
                            <SelectValue placeholder={placeholder} />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>none</SelectLabel>
                                <SelectItem value="1">none</SelectItem>
                            </SelectGroup>
                            <SelectGroup>
                                <SelectLabel >Neuro Surgeon</SelectLabel>
                                <SelectItem value="2">surgeon1</SelectItem>
                                <SelectItem value="3">surgeon2</SelectItem>
                                <SelectItem value="4">surgeon3</SelectItem>
                                <SelectItem value="5">surgeon4</SelectItem>
                                <SelectItem value="6">surgeon5</SelectItem>
                                <SelectItem value="7">surgeon6</SelectItem>

                            </SelectGroup>
                            <SelectGroup>
                                <SelectLabel>Padiatric Surgeon</SelectLabel>
                                <SelectItem value="8">surgeon7</SelectItem>
                                <SelectItem value="9">surgeon8</SelectItem>
                                <SelectItem value="10">surgeon9</SelectItem>

                            </SelectGroup>
                            <SelectGroup>
                                <SelectLabel>Medicine</SelectLabel>
                                <SelectItem value="11">Medicine1</SelectItem>
                                <SelectItem value="12">Medicine2</SelectItem>
                                <SelectItem value="13">Medicine3</SelectItem>
                                <SelectItem value="14">Medicine4</SelectItem>
                                <SelectItem value="15">Medicine5</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </FormItem>
            )}
        />
    )
}

export function DateField({ control, name, label, placeholder }: BaseFieldProps) {
    return (
        <FormField
            control={control}
            name={name}
            render={({ field }) => (
                <FormItem>
                    <FormLabel>{label}</FormLabel>
                    <FormControl>
                        <div className="relative">
                            <Input
                                type="date"
                                {...field}
                                value={field.value ?? ""}
                                className="pr-10" // make room for the icon
                            />

                        </div>
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />
    );
}
export function TimeField({ control, name, label, placeholder }: BaseFieldProps) {
    return (
        <FormField
            control={control}
            name={name}
            render={({ field }) => (
                <FormItem>
                    <FormLabel>{label}</FormLabel>
                    <FormControl>
                        <Input type="time" {...field} placeholder={placeholder} value={field.value ?? ""} />
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />
    );
}
export function TextField({ control, name, label, placeholder }: BaseFieldProps) {
    return (
        <FormField
            control={control}
            name={name}
            render={({ field }) => (
                <FormItem>
                    <FormLabel>{label}</FormLabel>
                    <FormControl>
                        <Input  {...field} placeholder={placeholder} value={field.value ?? ""} />
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />
    );
}


export function TextAreaField({ control, name, label, placeholder }: BaseFieldProps) {
    return (

        <FormField
            control={control}
            name={name}
            render={({ field }) => (
                <FormItem>
                    <FormLabel>{label}</FormLabel>
                    <FormControl>
                        <Textarea {...field} placeholder={placeholder} className="resize-none" value={field.value ?? ""} />
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />
    );
}


export function CheckboxField({
    control,
    name,
    label,
    canCheck = true,
    alertMessage = "Please fill all required fields before enabling follow-up.",
}: BaseFieldProps) {


    const handleClick = (val: boolean) => {
        if (!canCheck) {
            setShowAlert(true);
            setTimeout(() => setShowAlert(false), 3000); 
            return;
        }
    };
  const [showAlert, setShowAlert] = useState(false);
    return (
        <>
            <FormField
                control={control}
                name={name}
                render={({ field }) => (
                    <FormItem className="flex items-center gap-2">
                        <FormControl>
                            <Checkbox
                                checked={field.value ?? false}
                                onCheckedChange={(val) => {
                                    handleClick(false);
                                    if (canCheck) field.onChange(val);
                                }}
                                className="cursor-pointer"
                            />
                        </FormControl>
                        <FormLabel className={`font-medium ${!canCheck ? "text-gray-400" : ""}`}>{label}</FormLabel>
                        <FormMessage />
                    </FormItem>
                )}
            />

            {/* Show alert */}
            {showAlert && (
                <Alert variant="destructive" className="mt-2">
                    <AlertCircleIcon />
                    <AlertTitle>Cannot enable Follow-up</AlertTitle>
                    <AlertDescription>{alertMessage}</AlertDescription>
                </Alert>
            )}
        </>
    );
}


export function RadioField({
    control,
    name,
    label,
    options,
}: { control: any; name: string; label: string; options: string[] }) {
    return (
        <FormField
            control={control}
            name={name}
            render={({ field }) => (
                <FormItem>
                    <FormLabel>{label}</FormLabel>
                    <FormControl>
                        <RadioGroup value={field.value} onValueChange={field.onChange} className="flex gap-6 mt-2">
                            {options.map((option) => (
                                <FormItem key={option} className="flex items-center space-x-2">
                                    <FormControl>
                                        <RadioGroupItem value={option} />
                                    </FormControl>
                                    <FormLabel className="font-normal">{option}</FormLabel>
                                </FormItem>
                            ))}
                        </RadioGroup>
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />
    );
}