import { useRouter } from "next/navigation";
import Image from "next/image";

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
        <Image
          src={path}
          alt=""
          width={0}
          height={0}
          sizes="195px" // 브라우저에게 렌더 폭 힌트
          style={{ width: "195px", height: "auto", borderRadius: "5px" }} // 비율 유지
          priority
        />
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
