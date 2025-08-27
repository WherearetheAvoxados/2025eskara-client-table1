"use client";
import style from "./page.module.css";
import DrawerComponent from "../../../components/drawer";
import Item from "../../../components/item";

// 실시간으로 해당 문서의 데이터를 구독

export default function Home() {
  return (
    <>
      <DrawerComponent />
      <div className={style.main_menu}>
        <h4>메인메뉴</h4>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
        }}
      >
        <Item
          path="/jnchtoast.jpg"
          menu_name="전남친 토스트"
          price={8000}
          menu_id={1}
        ></Item>
        <Item
          path="/goldenRice.jpg"
          menu_name="황금밥알"
          price={12000}
          menu_id={2}
        ></Item>
        <Item
          path="/tbk.jpg"
          menu_name="떡볶이"
          price={15000}
          menu_id={3}
        ></Item>
        <Item
          path="/melonSoda.jpeg"
          menu_name="메론소다"
          price={5000}
          menu_id={4}
        ></Item>
      </div>
    </>
  );
}
