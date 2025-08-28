import style from "./modalskeletion.module.css";

export default function ModalSkeleton() {
  return (
    <div className={style.modal}>
      <div
        style={{
          width: "min(90vw, 360px)",
          aspectRatio: " 3 / 4",
          padding: "16px 20px",
          borderRadius: 8,
          background: "#fff",
        }}
      ></div>
    </div>
  );
}
