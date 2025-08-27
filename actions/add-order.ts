"use server";

export const runtime = "nodejs";
export const config = { regions: ["icn1"] };

import { adminDb } from "../util/firebase-admin";

export default async function addOrder(order: Record<string, number>) {
  const ref = adminDb.doc("orders/CcT7414WHNw6jErkamkC");

  await adminDb.runTransaction(async (tx) => {
    const temp = (await tx.get(ref)).data();
    if (!temp) {
      console.log("data fetching error");
      return;
    }
    const snap = temp["1"];
    // ID수정
    const keyofOrder = Object.keys(order);
    for (let i = 0; i < keyofOrder.length; i++) {
      const element = keyofOrder[i];
      if (element in snap) {
        snap[element] += order[element];
      } else {
        snap[element] = order[element];
      }
      tx.update(ref, { "1": snap });
      // ID수정
    }
  });

  const ref2 = adminDb.doc("orders/M7yeumO6H39p9SmGNIIe");

  await adminDb.runTransaction(async (tx) => {
    const temp = (await tx.get(ref2)).data();
    if (!temp) {
      console.log("data fetching error");
      return;
    }
    const snap = temp["1"];
    // ID수정
    const keyofOrder = Object.keys(order);
    for (let i = 0; i < keyofOrder.length; i++) {
      const element = keyofOrder[i];
      if (element in snap) {
        snap[element] += order[element];
      } else {
        snap[element] = order[element];
      }
      tx.update(ref2, { "1": snap });
      // ID수정
    }
  });

  const ref3 = adminDb.doc("orders/wK8ufl1HdACxVt5HDOlW");

  await adminDb.runTransaction(async (tx) => {
    const snap = (await tx.get(ref3)).data();
    if (!snap) {
      console.log("data fetching error");
      return;
    }
    const keyOfOrder = Object.keys(order);
    for (let i = 0; i < keyOfOrder.length; i++) {
      const nowData = await snap[`${keyOfOrder[i]}`];
      let parseData = "";
      for (let j = 0; j < order[keyOfOrder[i]]; j++) {
        parseData += ` 1`;
        // ID수정
      }
      if (nowData == undefined || nowData == "") {
        tx.update(ref3, {
          [`${keyOfOrder[i]}`]: `${(parseData as string).slice(1)}`,
        });
      } else {
        tx.update(ref3, { [`${keyOfOrder[i]}`]: `${nowData + parseData}` });
      }
    }
  });
}
