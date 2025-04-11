function Loading() {
  return (
    <>
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <div
          className="spinner-border"
          role="status"
          style={{ color: "#ced4da" }}
        >
          <span className="visually-hidden">Yükleniyor...</span>
        </div>
      </div>
    </>
  );
}

export default Loading;
