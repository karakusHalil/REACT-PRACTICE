import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  // const firstName: string = "Halil";
  // let age: number = 25;
  // let result: boolean = false;
  // if (!result) {
  //   age = 35;
  // }

  // any types

  let item: any = "25"; //Herhangi bir tür atanabilir genelde ne geliceği belli olmayan verilerde kullanılır

  //UnionTypes

  let age: number | string | boolean = true;

  //literal Types

  let statusResult: "pending" | "approved" | "rejected"; // statusResault'a gelebilecek değerler 3'ünden 1'i olmak zorunda dedik

  statusResult = "approved";

  //Array
  let names: string[] = ["Halil", "Harun", "Enes"];

  let numbers: number[] = [1, 2, 3, 4, 5];
  console.log(numbers);

  let numbers2: Array<number> = [1, 2, 3];

  //number[] = Array<number>   Aynı şey
  //string[] = Array<string>

  let mixedArray: (string | number | boolean)[] = ["ali", 1, false];

  //interface-type: kendi tipimizi oluşturmamızı sağlıyor

  type User = {
    name: string;
    age: number;
  };

  //Optional type ? burada age'e ? verince atama yapmasakta olabilir oluyor ? olmayınca age'e atama yapılmazsa kızıyor

  interface User2 {
    //type ile arasındaki tek fark = olmaması
    name: string;
    age?: number;
  }

  let array2: User[] = [{ name: "Ali", age: 22 }];

  const object1: User = {
    name: "Enes",
    age: 25,
  };

  const object2: User2 = {
    name: "Ali",
  };

  //Function - önemli

  function topla(a: number, b: number): number {
    //ne döüceğimi söylüyoruz isteğe bağlı
    return a + b;
  }

  //functionlarda arrayler Array<string> gibi verilebiliyor içinde dönerken forEach map gibilerde yine : tür verebiliyoruz

  //return yani bişey döndürmeyen fonksiyonlarda void kullanıyoruz

  //void : geriye bir şey döndürmeyen metoddur

  function write(deneme: Array<string>): void {
    deneme.forEach((value: string) => console.log(value));
  }
  let array: Array<string> = ["enes", "ali", "veli"];
  write(array);

  //----------------------------------

  interface User3 {
    name: string;
    age: number;
  }

  const obj1: User3 = {
    name: "Enes",
    age: 25,
  };
  const obj2: User3 = {
    name: "Harun",
    age: 24,
  };

  let myArray: Array<User> = [obj1, obj2];

  function writeConsole(array: Array<User>): void {
    array.forEach((value: User) => console.log(value));
  }

  writeConsole(myArray);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      {/* <p>{firstName}</p> */}
      <p>{age}</p>
      <p>{statusResult}</p>
      <div>
        {names.map((name) => (
          <p>{name}</p>
        ))}
      </div>
    </>
  );
}

export default App;
