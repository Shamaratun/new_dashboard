import PatientProfile from "../patientProfile";




interface PageProps {
  params: { id: string };
}

export default function Page({ params }: PageProps) {
  return <PatientProfile id={Number(params.id)} />;
}
// export default function Page({ params }: { params: { id: string } }) {
//   return <PatientProfilePage id={Number(params.id)} />;
// }