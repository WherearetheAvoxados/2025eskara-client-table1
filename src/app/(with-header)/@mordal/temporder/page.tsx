"use client";

import dynamic from "next/dynamic";
import ModalSkeleton from "../../../../../components/modalskeleton";

const TempBillModal = dynamic(
  () => import("../../../../../components/bill_copy"),
  {
    ssr: false, // 모달은 클라 전용이면 권장
    loading: () => <ModalSkeleton />, // 로딩 UI
  }
);

export default function Page() {
  return <TempBillModal />;
}
