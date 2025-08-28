// components/AlertButton.tsx
"use client";
import { useState, useEffect } from "react";
import { useDrawer } from "../context/layoutProvider";
import style from "./alert.module.css";
import { useRouter } from "next/navigation";

export default function AlertButton({
  when, // 알럿을 띄울 조건 (예: itemsCount===0)
  action, // 서버 액션
  children,
  orders,
}: {
  when: boolean;
  action: (orders: { [key: string]: number }) => Promise<void>;
  children: React.ReactNode;
  orders: { [key: string]: number };
}) {
  const { setOpen } = useDrawer();
  const [overlay, setOverlay] = useState(false);
  const router = useRouter();

  useEffect(() => {
    router.prefetch("/temporder");
  }, [router]);
  const onClick = () => {
    if (when) {
      alert("장바구니가 비었습니다!");
      return;
    }
    const ok = confirm("주문을 진행할까요? 주문 후 취소는 불가능합니다.");
    if (ok) {
      setOverlay(true); // 오버레이 켜고
      setTimeout(() => {
        router.push("/temporder");
        setOpen(false); // 1초 뒤 이동
        setTimeout(() => {
          action(orders).catch(() => {});
        }, 0);
      }, 1500);
    }
  };

  return (
    <>
      <button className={style.order_btn} onClick={onClick} disabled={overlay}>
        {overlay ? "처리 중..." : children}
      </button>
      {overlay && (
        <div
          className={style.fullscreenOverlay}
          role="dialog"
          aria-modal="true"
          aria-label="로딩 중"
        >
          <div className={style.overlayCard}>
            영수증 준비 중…
            <div className={style.spinner} />
          </div>
        </div>
      )}
    </>
  );
}
