import { ListItem, ListItemButton, ListItemText } from "@mui/material";
import { useOrder } from "../context/layoutProvider";
export default function ListBox({
  item_name,
  item_count,
  item_id,
}: {
  item_name: string;
  item_count: number;
  item_id: string;
}) {
  const count = `${item_count} ea`;
  const { setOrder } = useOrder();
  const onDelete = () => {
    setOrder((prev: { [key: string]: number }) => {
      const next = { ...prev };
      delete next[item_id]; // or next[item_id] = 0;
      return next; // 새 참조 반환 → 리렌더
    });
  };
  return (
    <ListItem key="1" disablePadding>
      <ListItemButton sx={{ display: "flex", justifyContent: "space-between" }}>
        <ListItemText primary={item_name} />
        <ListItemText
          sx={{ flex: "0 0 auto", textAlign: "left", mr: "2rem" }}
          primary={count}
        />
        <ListItemText
          sx={{ flex: "0 0 auto", textAlign: "right" }}
          primary="x"
          onClick={onDelete}
        />
      </ListItemButton>
    </ListItem>
  );
}
