import "./App.css";

function App() {
  // function yazdir(array: string[]) {
  //   console.log(array);
  // }
  // yazdir(["halil", "ali", "veli"]);
  // yazdir([1, 2, 3, 4, 5]); yanlış
  // yazdir([true, false]); yanlış

  function yazdir<T>(array: T[]): void {
    console.log(array);
  }

  yazdir(["enes", "ali"]);
  yazdir([1, 2, 3, 4, 5]);
  yazdir([true, false]);

  interface GenericType<T> {
    name: string;
    age: number;
    salary: T[];
  }

  const obj1: GenericType<string> = {
    name: "Halil",
    age: 28,
    salary: ["25000", "30000", "40000"],
  };

  console.log(obj1);

  const obj2: GenericType<number> = {
    name: "Harun",
    age: 30,
    salary: [30000],
  };
  console.log(obj2);

  let array: GenericType<string | number>[] = [obj1, obj2];

  // console.log(array);

  function write<T>(array: GenericType<T>[]): void {
    array.forEach((value: GenericType<T>) => {
      console.log(value);
    });
  }

  write(array);

  return (
    <>
      <div></div>
    </>
  );
}

export default App;
