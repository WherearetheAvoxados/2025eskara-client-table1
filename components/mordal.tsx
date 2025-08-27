"use client";

import style from "./mordal.module.css";
import { ReactNode, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useRef } from "react";
import { useRouter } from "next/navigation";

export default function Modal({ children }: { children: ReactNode }) {
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
    // 여기! 모달 모드로 띄워야 backdrop이 생깁니다.
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
  return createPortal(
    <dialog ref={dialogRef} className={style.mordal} onClick={onClick}>
      {children}
    </dialog>,
    modalRoot
  );
}
