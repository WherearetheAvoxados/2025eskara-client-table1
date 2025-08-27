// components/AlertButton.tsx
"use client";
import { useTransition } from "react";
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
  const [pending, start] = useTransition();
  const { setOpen } = useDrawer();
  const router = useRouter();
  const onClick = () => {
    if (when) {
      alert("장바구니가 비었습니다!");
      return;
    }
    const ok = confirm("주문을 진행할까요? 주문 후 취소는 불가능합니다.");
    if (ok) {
      start(() => action(orders)); // 조건 통과 시 서버 액션 실행
      setOpen(false);
      router.push("/temporder");
    }
  };

  return (
    <button className={style.order_btn} onClick={onClick} disabled={pending}>
      {pending ? "처리 중..." : children}
    </button>
  );
}
