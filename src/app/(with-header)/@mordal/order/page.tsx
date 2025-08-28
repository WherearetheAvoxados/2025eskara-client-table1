import BillModal from "../../../../../components/bill";
import localFont from "next/font/local";
//table id string으로 변수로 받아오기
const BM_HANNA = localFont({
  src: "../../../../../font/BMHANNAAir_ttf.ttf",
  weight: "400", // ttf라면 weight는 그냥 "400"으로 지정
  style: "normal",
});
export default async function MordalPage() {
  return <BillModal fontclass={BM_HANNA.className}></BillModal>;
}
