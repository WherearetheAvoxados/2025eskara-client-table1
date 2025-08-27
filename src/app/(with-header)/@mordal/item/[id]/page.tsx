import { Suspense } from "react";
import ItemPage from "../../../../../../components/item_page";
import Mordal from "../../../../../../components/mordal";

export default async function MordalPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return (
    <Mordal>
      <ItemPage p_id={id}></ItemPage>
    </Mordal>
  );
}
