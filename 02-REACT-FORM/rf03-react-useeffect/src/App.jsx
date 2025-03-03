import { useEffect, useState } from "react";

function App() {
  const [FirstName, setFirstName] = useState(" ");
  const [LastName, setLastName] = useState(" ");
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("her koşulda çalışır");
  });

  useEffect(() => {
    console.log("render edildiğinde çalışır");
  }, []);

  useEffect(() => {
    console.log("Firstname veya Lastname değiştiğinde çalışır");
  }, [FirstName, LastName]);

  useEffect(() => {
    console.log("Count değiştikçe çalışır");
  }, [count]);

  return (
    <>
      <p className="text-center mt-5">Count: {count}</p>
      <p className="text-center">FirstName: {FirstName}</p>
      <p className="text-center">LastName: {LastName}</p>
      <p className="d-grid gap-3 justify-content-center mt-5">
        <button className="btn btn-primary w-100"
          onClick={() => {
            setFirstName("sergen");
          }}
        >
          İsim Değiştir
        </button>
        <button className="btn btn-primary w-100"
          onClick={() => {
            setLastName("yılmaz");
          }}
        >
          Soyismi Değiştir
        </button>

        <button className="btn btn-primary w-100"
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Arttır
        </button>
        <button className="btn btn-primary w-100"
          onClick={() => {
            setCount(count - 1);
          }}
        >
          Azalt
        </button>
      </p>
    </>
  );
}

export default App;
