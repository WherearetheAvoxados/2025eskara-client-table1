"use client";

import { item_state } from "../mock/item_state";

import style from "./bill.module.css";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useRef } from "react";
import { useRouter } from "next/navigation";
import CopyButton from "./copyButton";
import { useOrder } from "../context/layoutProvider";

export default function TempBillModal({ fontclass }: { fontclass: string }) {
  const router = useRouter();
  const { order, setOrder } = useOrder();
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [mounted, setMounted] = useState(false);
  const [modalRoot, setModalRoot] = useState<HTMLElement | null>(null);
  const nowField = order;

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
      setOrder({});
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
