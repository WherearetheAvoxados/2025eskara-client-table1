import { Drawer, List, Box } from "@mui/material";
import { useDrawer, useOrder } from "../context/layoutProvider";
import ListBox from "./list-item";
import { item_state } from "../mock/item_state";
import { useEffect } from "react";
import AlertButton from "./alert";
import style from "./drawer.module.css";
import addOrder from "../actions/add-order";

export default function DrawerComponent() {
  const { open, setOpen } = useDrawer();
  const { order } = useOrder();
  const orders = Object.entries(order);
  useEffect(() => {}, [order]);

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={() => setOpen(false)}
      className={style.drawerPaper}
      sx={{
        "& .MuiDrawer-paper": {
          width: { xs: "78vw", sm: 360, md: 380 }, // 모바일/태블릿/데스크탑
          maxWidth: 420,
        },
      }}
    >
      <Box className={style.drawerHeader}>장바구니</Box>

      <List className={style.drawerList}>
        {orders.map((item) =>
          item[1] > 0 ? (
            <ListBox
              item_count={item[1]}
              item_name={item_state[item[0]].name}
              key={item[0]}
              item_id={item[0]}
            />
          ) : null
        )}
      </List>

      <div className={style.drawerFooter}>
        <AlertButton when={orders.length < 1} action={addOrder} orders={order}>
          주문하기
        </AlertButton>
      </div>
    </Drawer>
  );
}
