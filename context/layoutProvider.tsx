"use client";
import {
  createContext,
  useContext,
  useState,
  Dispatch,
  SetStateAction,
} from "react";
import Header from "../components/header";
import style from "./layoutProvider.module.css";
import React from "react";

type DrawerContextType = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

type OrderContextType = {
  order: { [key: string]: number };
  setOrder: Dispatch<SetStateAction<object>>;
};
const DrawerContext = createContext<DrawerContextType | undefined>(undefined);
const OrderContext = createContext<OrderContextType | undefined>(undefined);

export default function DrawerProvider({
  children,
  mordal,
}: {
  children: React.ReactNode;
  mordal: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const [order, setOrder] = useState({});
  return (
    <OrderContext.Provider value={{ order, setOrder }}>
      <DrawerContext.Provider value={{ open, setOpen }}>
        <div className={style.wrapper}>
          <div className={style.mobile_container}>
            <Header></Header>
            {React.Children.toArray(children)}
            {/* parallel 라우트 쓰면 children으로 default.tsx, page.tsx 두개가 배열로 들어옴 => key error 유발 가능 */}
            {mordal}
            <div id="modal-root" />
          </div>
        </div>
      </DrawerContext.Provider>
    </OrderContext.Provider>
  );
}

export function useDrawer() {
  const ctx = useContext(DrawerContext);
  if (!ctx) throw new Error("useDrawer must be used within <DrawerProvider>");
  return ctx;
}

export function useOrder() {
  const ord = useContext(OrderContext);
  if (!ord) throw new Error("useDrawer must be used within <DrawerProvider>");
  return ord;
}
