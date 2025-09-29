


type PatientInfoRowProps = {
  label: string;
  value: string | number | undefined;
  className?: string;
};

export default function PatientInfoRow({ label, value , className }: PatientInfoRowProps) {
  if (!value) return null; 

  return (
    <div className={`flex items-center ${className || ""}`}>
      <span className="font-semibold">{label}:</span>
      <span className="font-semibold ml-2">{value}</span>
    </div>
  );
}