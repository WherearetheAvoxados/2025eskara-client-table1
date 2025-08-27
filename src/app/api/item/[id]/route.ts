import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const config = { regions: ["icn1"] };

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function GET(req: Request, { params }: any) {
  const { id } = await params;
  switch (id) {
    case "1":
      return NextResponse.json({
        description: `${id} item 에 관한 설명입니다.`,
      });
    case "2":
      return NextResponse.json({
        description: `${id} item 에 관한 설명입니다.`,
      });
    case "3":
      return NextResponse.json({
        description: `“이 🌶️떡볶이🌶️ 는 그냥 떡볶이가 아닙니다.”\n\n 엽떡 주방에서 3,000번의 국물 교체와 5,000번의 떡 뒤집기를 경험한 전직 주방장이, 은퇴 후 아이스 주장으로 활약하다가 다시 주방으로 돌아와 완성한 레시피.

국물은 단순한 고추장이 아니라, 얼음 위에서 튀는 퍽의 속도감과 **빙판 위에서 흘린 땀의 짭조름함(?)**을 동시에 담았습니다.
떡은 평범한 밀떡이 아니라, 수많은 몸싸움에도 끄떡없는 주장 어깨의 탄탄함을 닮았으며,
어묵은 경기 종료 후 락커룸에서 흘러나오던 승리의 눈물 맛으로 숙성되었습니다.

한 입 베어물면,
마치 9회말 2아웃 만루에서 끝내기 홈런을 친 듯한 짜릿함이 입안을 가득 채우고,
국물 한 숟가락은 빙판 위에서 미끄러지다 그대로 응원석으로 돌진하는 듯한 스릴을 선사합니다.`,
        src: `/hjm.jpeg`,
      });
    case "4":
      return NextResponse.json({
        description: `${id} item 에 관한 설명입니다.`,
      });
    default:
      return NextResponse.json({ description: "id 값을 받아오지 못했습니다." });
  }
}
