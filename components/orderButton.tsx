"use client";

import styles from "./orderButton.module.css";
import { useState } from "react";
import { useOrder } from "../context/layoutProvider";
import { useRouter } from "next/navigation";

export default function OrderButton({ id }: { id: string }) {
  const [count, setCount] = useState(0);
  const { order, setOrder } = useOrder();
  const router = useRouter();
  const onPlusClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setCount(count + 1);
  };

  const onMinusClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const onOrderClick = () => {
    if (count <= 0) {
      window.alert("수량을 정확히 입력하세욧");
      return;
    }
    if (id in order) {
      order[id] += count;
      setOrder(order);
    } else {
      setOrder({
        ...order,
        [id]: count,
      });
    }

    router.back();
  };

  return (
    <div className={styles.orderButton}>
      <div onClick={onOrderClick}>{count}개 장바구니 담기</div>
      <div className={styles.counter}>
        <button autoFocus={false} onClick={onPlusClick}>
          +
        </button>
        <button className={`${styles.minus}`} onClick={onMinusClick}></button>
      </div>
    </div>
  );
}
