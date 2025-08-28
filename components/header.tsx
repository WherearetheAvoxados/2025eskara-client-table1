"use client";

import React from "react";
import style from "./header.module.css";
import { useDrawer, useOrder } from "../context/layoutProvider";
import { Avatar } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Header() {
  const { open, setOpen } = useDrawer();
  const { order } = useOrder();
  const router = useRouter();

  const order_count = Object.keys(order).length;

  const onOrderClick = () => {
    setOpen(!open);
    router.prefetch("/temporder");
  };

  const onBillClick = () => {
    router.push("/order");
  };

  return (
    <div className={style.header}>
      <div className={style.left} onClick={onBillClick}>
        <Image
          src={"/receipt.png"}
          width={0}
          height={0}
          sizes="45px"
          style={{
            height: "45px",
            width: "auto",
          }}
          alt={""}
        />
      </div>
      <div className={style.title}>
        <Image
          className={style.mat}
          src={"/mat.png"}
          alt=""
          width={0}
          height={0}
          sizes="7rem"
          style={{ width: "3.2rem", height: "auto" }}
        ></Image>
        <Image
          src={"/title.jpeg"}
          alt=""
          width={0}
          height={0}
          sizes="7rem"
          style={{ width: "10rem", height: "auto" }}
        ></Image>
        <Image
          className={style.mat}
          src={"/pat.png"}
          alt=""
          width={0}
          height={0}
          sizes="7rem"
          style={{ width: "3.2rem", height: "auto" }}
        ></Image>
      </div>
      <button className={style.right} onClick={onOrderClick}>
        <div className={style.avatar_container}>
          <Avatar className={style.order_avatar}>{order_count}</Avatar>
        </div>
        <Avatar className={style.menu_avatar}>
          <div className={style.hamburger}>
            <span />
            <span />
            <span />
          </div>
        </Avatar>
      </button>
    </div>
  );
}
