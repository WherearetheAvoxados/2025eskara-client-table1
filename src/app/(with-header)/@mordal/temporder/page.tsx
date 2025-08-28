"use client";

import dynamic from "next/dynamic";
import ModalSkeleton from "../../../../../components/modalskeleton";
import localFont from "next/font/local";

const BM_HANNA = localFont({
  src: "../font/BMHANNAAir_ttf.ttf",
  weight: "400", // ttf라면 weight는 그냥 "400"으로 지정
  style: "normal",
});

const TempBillModal = dynamic(
  () => import("../../../../../components/bill_copy"),
  {
    ssr: false, // 모달은 클라 전용이면 권장
    loading: () => <ModalSkeleton />, // 로딩 UI
  }
);

export default function Page() {
  return <TempBillModal fontclass={BM_HANNA.className} />;
}
