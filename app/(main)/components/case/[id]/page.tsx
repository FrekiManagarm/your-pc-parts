import { getCaseById } from "@/actions/case/case.action";
import { Case } from "@prisma/client";

type CaseDetailsPageProps = {
  params: {
    id: string;
  };
};

export default async function CaseDetailsPage({
  params,
}: CaseDetailsPageProps) {

  return <div>CaseDetailsPage</div>;
}
