"use client";

import { item_state } from "../mock/item_state";

import style from "./bill.module.css";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useRef } from "react";
import { useRouter } from "next/navigation";
import CopyButton from "./copyButton";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../util/firebase"; // 클라이언트 SDK 초기화한 db

export default function BillModal({ fontclass }: { fontclass: string }) {
  const [nowField, setNowField] = useState<Record<string, number>>({});
  useEffect(() => {
    const ref = doc(db, "orders", "CcT7414WHNw6jErkamkC");
    // 구독 시작
    const unsubscribe = onSnapshot(ref, (snapshot) => {
      if (snapshot.exists()) {
        setNowField(snapshot.data()["1"]);
        //ID 수정
      } else {
        console.log("문서가 존재하지 않습니다");
      }
    });
    // 컴포넌트 언마운트 시 구독 해제
    return () => {
      console.log("구독 해제되었습니다");
      unsubscribe();
    };
  }, []);
  const router = useRouter();
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [mounted, setMounted] = useState(false);
  const [modalRoot, setModalRoot] = useState<HTMLElement | null>(null);
  useEffect(() => {
    setMounted(true);
    setModalRoot(document.getElementById("modal-root"));
  }, []);
  useEffect(() => {
    if (!mounted || !dialogRef.current) return;
    if (!dialogRef.current.open) dialogRef.current.showModal();
  }, [mounted]);

  if (!mounted || !modalRoot) return null;

  type DialogClickEvent = React.MouseEvent<HTMLDialogElement, MouseEvent>;

  const onClick = (e: DialogClickEvent) => {
    if (
      e.target instanceof HTMLDialogElement &&
      e.target.nodeName === "DIALOG"
    ) {
      router.back();
    }
  };

  let sum = 0;
  const keyOfField = Object.keys(nowField);
  const ValuesOfField = Object.values(nowField);
  for (let i = 0; i < keyOfField.length; i++) {
    const key = keyOfField[i];
    sum += item_state[key].price * ValuesOfField[i];
  }

  return createPortal(
    <dialog ref={dialogRef} className={style.mordal} onClick={onClick}>
      <div className={style.inner}>
        {Object.entries(nowField).map(([key, value]) => (
          <div
            className={`${fontclass} ${style.menus_container}`}
            key={key + 60}
          >
            <div className={style.menu_name} key={key}>
              {item_state[key].name}
            </div>
            <div className={style.menu_count} key={key + 90}>
              {value}개
            </div>
            <div className={style.menu_price} key={key + 30}>
              {item_state[key].price * value}
            </div>
          </div>
        ))}
        <div className={`${fontclass} ${style.footer}`}>
          <div> * * * * * * * * * * * * * * * * *</div>
          <div className={style.sum}>
            <div>합계</div>
            <div>{sum}</div>
          </div>
          <div className={style.money}>
            <div>우리 1002-065-975517 (예금주: 김연우)</div>
            <CopyButton></CopyButton>
          </div>
          <div className={style.info}> 조리는 입금확인 후 시작됩니다! </div>
        </div>
      </div>
    </dialog>,
    modalRoot
  );
}
