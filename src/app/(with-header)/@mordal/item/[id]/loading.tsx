// app/(with-header)/loading.tsx
export default function Loading() {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        display: "grid",
        placeItems: "center",
        background: "rgba(0,0,0,.35)",
      }}
    >
      <div
        style={{
          padding: "16px 20px",
          background: "rgba(0, 0, 0, 0.7)",
          color: "white",
          borderRadius: 8,
          boxShadow: "0 10px 30px rgba(0,0,0,.2)",
        }}
      >
        불러오는 중…
      </div>
    </div>
  );
}
