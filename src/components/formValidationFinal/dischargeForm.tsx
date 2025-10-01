// "use client";
// import React, { useState } from "react";

// const DischargeForm = () => {
//   const [formData, setFormData] = useState({
//     patient_id: "",
//     admission_id: "",
//     hospital_id: "",
//     doctor_id: "",
//     discharge_date: "",
//     advice: "",
//     followup_required: false,
//     followup_notes: "",
//     outcome: "", // new field
//     fu_procedure: "", // new field
//   });

//   const [message, setMessage] = useState("");

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     const { name, value, type } = e.target;
//     setFormData({
//       ...formData,
//       [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
//     });
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     try {
//       console.log("Submitting Discharge Data:", formData);

//       setMessage("✅ Discharge record submitted successfully!");
//       setFormData({
//         patient_id: "",
//         admission_id: "",
//         hospital_id: "",
//         doctor_id: "",
//         discharge_date: "",
//         advice: "",
//         followup_required: false,
//         followup_notes: "",
//         outcome: "",
//         fu_procedure: "",
//       });
//     } catch (err) {
//       console.error("Submit Failed:", err);
//       setMessage("❌ Failed to submit discharge record!");
//     }
//   };

//   return (
//     <div className="max-w-xl mx-auto bg-white shadow-lg rounded-2xl p-6">
//       <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
//         Patient Discharge Form
//       </h2>

//       <form onSubmit={handleSubmit} className="space-y-4">
//         {/* Discharge Date */}
//         <div>
//           <label className="block text-sm font-medium text-gray-700">
//             Discharge Date & Time
//           </label>
//           <input
//             type="datetime-local"
//             name="discharge_date"
//             value={formData.discharge_date}
//             onChange={handleChange}
//             required
//             className="mt-1 block w-full rounded-lg border border-gray-300 p-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//           />
//         </div>

//         {/* Advice */}
//         <div>
//           <label className="block text-sm font-medium text-gray-700">
//             Advice on Discharge
//           </label>
//           <textarea
//             name="advice"
//             value={formData.advice}
//             onChange={handleChange}
//             placeholder="Enter discharge advice"
//             required
//             className="mt-1 block w-full rounded-lg border border-gray-300 p-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//           />
//         </div>

//         {/* Follow-up */}
        

//         {/* FU Procedure */}
//         <div>
//           <label className="block text-sm font-medium text-gray-700">
//             Follow-up Procedure
//           </label>
//           <textarea
//             name="fu_procedure"
//             value={formData.fu_procedure}
//             onChange={handleChange}
//             placeholder="Enter follow-up procedure"
//             className="mt-1 block w-full rounded-lg border border-gray-300 p-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//           />
//         </div>

//         {/* Outcome */}
        // <div>
        //   <label className="block text-sm font-medium text-gray-700">
        //     Outcome
        //   </label>
        //   <div className="flex gap-6 mt-2">
        //     {["Excellent", "Sufficient", "Average"].map((option) => (
        //       <label key={option} className="flex items-center gap-2">
        //         <input
        //           type="radio"
        //           name="outcome"
        //           value={option}
        //           checked={formData.outcome === option}
        //           onChange={handleChange}
        //           required
        //           className="text-blue-600 focus:ring-blue-500"
        //         />
        //         <span className="text-sm text-gray-700">{option}</span>
        //       </label>
        //     ))}
        //   </div>
        // </div>

//    <div className="flex items-center gap-2">
//           <input
//             type="checkbox"
//             name="followup_required"
//             checked={formData.followup_required}
//             onChange={handleChange}
//             className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
//           />
//           <label className="text-sm font-medium text-gray-700">
//             Follow-up Required
//           </label>
//         </div>

//         {formData.followup_required && (
//           <div>
//             <label className="block text-sm font-medium text-gray-700">
//               Follow-up Notes
//             </label>
//             <textarea
//               name="followup_notes"
//               value={formData.reusable_form}
//               onChange={handleChange}
//               placeholder="Enter follow-up notes"
//               required
//               className="mt-1 block w-full rounded-lg border border-gray-300 p-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//             />
//           </div>
//         )}
//         <button
//           type="submit"
//           className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition font-semibold"
//         >
//           Submit Discharge
//         </button>
//       </form>

//       {message && (
//         <p
//           className={`mt-4 text-center font-medium ${
//             message.startsWith("✅") ? "text-green-600" : "text-red-600"
//           }`}
//         >
//           {message}
//         </p>
//       )}
//     </div>
//   );
// };

// export default DischargeForm;