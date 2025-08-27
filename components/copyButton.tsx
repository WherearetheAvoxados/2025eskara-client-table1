"use client";
import localFont from "next/font/local";

import { useState } from "react";
import style from "./copyButton.module.css";

const BM_HANNA = localFont({
  src: "../font/BMHANNAAir_ttf.ttf",
  weight: "400", // ttf라면 weight는 그냥 "400"으로 지정
  style: "normal",
});

export default function CopyButton() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText("1002-065-975517");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // 2초 뒤 메시지 초기화
    } catch (err) {
      console.error("복사 실패:", err);
    }
  };

  return (
    <button
      className={`${style.copyBtn} ${BM_HANNA.className}`}
      onClick={handleCopy}
    >
      {copied ? "✔️" : "📋 복사하기"}
    </button>
  );
}
