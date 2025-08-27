import styles from "./item_page.module.css";
import { headers } from "next/headers";
import OrderButton from "./orderButton";
import Image from "next/image";

export default async function ItemPage({ p_id }: { p_id: string }) {
  const h = await headers();
  const host = h.get("x-forwarded-host") ?? h.get("host")!; // 프록시/로컬 모두 대응
  const proto = h.get("x-forwarded-proto") ?? "http"; // dev는 보통 http

  const res = await fetch(`${proto}://${host}/api/item/${p_id}`, {
    cache: "force-cache", // 빌드 타임 호출 방지 (항상 런타임)
  });
  if (!res.ok) throw new Error("API failed");
  const data = await res.json();

  return (
    <>
      <div className={styles.modalContainer}>
        <div className={styles.modalContent}>
          {"src" in data ? (
            <Image
              src={data.src}
              alt={""}
              width={0}
              height={0} // dummy 값, 비율 무시
              sizes="100px"
              style={{ width: "100px", height: "auto" }}
            ></Image>
          ) : null}
          <br></br>
          {data.description}
        </div>
        <div className={styles.modalFooter}>
          <OrderButton id={p_id}></OrderButton>
        </div>
      </div>
    </>
  );
}
