import { useRouter } from "next/navigation";
import Image from "next/image";
import style from "./item.module.css";

export default function Item({
  path,
  menu_id,
  price,
  menu_name,
}: {
  path: string;
  menu_id: number;
  price: number;
  menu_name: string;
}) {
  const router = useRouter();
  const onClick = () => {
    switch (menu_id) {
      case 1:
        router.push("/item/1");
        break;
      case 2:
        router.push("/item/2");
        break;
      case 3:
        router.push("/item/3");
        break;
      case 4:
        router.push("/item/4");
        break;
    }
  };
  return (
    <>
      <div style={{ padding: "10px", cursor: "pointer" }} onClick={onClick}>
        <div className={style.thumb}>
          <Image
            src={path}
            alt=""
            fill
            sizes="(max-width: 430px) 50vw, 195px"
            style={{ objectFit: "cover", borderRadius: 8 }}
            priority
          />
        </div>
        <div>
          <div
            style={{
              fontSize: "12px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div>{menu_name}</div>
            <div>{price}</div>
          </div>
        </div>
        <div style={{ fontSize: "10px", color: "rgb(161 161 165)" }}>
          상세정보는 클릭하세요!
        </div>
      </div>
    </>
  );
}
