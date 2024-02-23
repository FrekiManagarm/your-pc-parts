import { getCaseById } from "@/actions/case/case.action";
import { Case } from "@/lib/types";

type CaseDetailsPageProps = {
  params: {
    id: string;
  };
};

export default async function CaseDetailsPage({
  params,
}: CaseDetailsPageProps) {
  const data: Case | undefined = await getCaseById(params.id);

  return <div>CaseDetailsPage</div>;
}
