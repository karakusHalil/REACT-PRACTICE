function NotFound() {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          textAlign: "center",
          backgroundColor: "#f8f9fa",
          color: "#333",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <h1
          style={{
            fontSize: "120px",
            fontWeight: "bold",
            color: "#dc3545",
            margin: 0,
          }}
        >
          404
        </h1>
        <h2 style={{ fontSize: "32px", margin: "10px 0" }}>Sayfa Bulunamadı</h2>
        <p style={{ fontSize: "18px", color: "#666" }}>
          Üzgünüz, aradığınız sayfa mevcut değil.
        </p>
      </div>
    </>
  );
}

export default NotFound;
