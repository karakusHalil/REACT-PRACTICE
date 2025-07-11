import { useEffect, useState } from "react";
import "./App.css";
import Product from "./Product";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  useEffect(() => {
    console.log("her zaman çalışır");
  });
  useEffect(() => {
    console.log("component render edildiğinde çalışır");
  }, []);
  useEffect(() => {
    console.log(
      "ilk render edildiğinde ve firstName state değeri değiştiğinde çalışır "
    );
  }, [firstName]);
  useEffect(() => {
    console.log(
      "ilk render edildiğinde ve lastname state değeri değiştiğinde çalışır"
    );
  }, [lastName]);
  useEffect(() => {
    console.log(
      "ilk render edildiğinde ve firstname veya lastname state değeri değiştiğinde çalışır"
    );
  }, [firstName, lastName]);
  return (
    <>
      <div>
        <div>
          <button onClick={() => setFirstName("Enes")}>Adı değiştir</button>
        </div>

        <div>
          <button onClick={() => setLastName("Bayram")}>
            Soyisimi değiştir
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
