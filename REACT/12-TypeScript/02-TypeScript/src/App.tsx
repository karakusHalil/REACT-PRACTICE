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

  //miras alma - extends

  interface OrtakAlanlar {
    id: string;
    olusturmaTarihi: string;
    olusturanKisi: string;
  }

  interface Musteri extends OrtakAlanlar {
    musteriNo: string;
  }

  interface Kurum extends OrtakAlanlar {
    kurumNo: string;
  }

  const kurum: Kurum = {
    id: "1",
    olusturmaTarihi: "09.06.2024",
    olusturanKisi: "Enes",
    kurumNo: "23123",
  };
  //*----------------------------------*//
  //Partial, Required, ReadOnly, pick, omit
  //Partial: optional yapar
  //Required: her şeyi doldurmak zorunda bırakır
  //ReadOnly: setlemeyi engeller sadece okunabilir yapar
  //Pick : sadece belirlenen değişkeni almak için kullanır
  //Omit : belirlenen alanları setleyemezsin onun dışındakileri setlemene izin verir

  interface User {
    name: string;
    age: number;
    lastname: string;
    tckn: string;
    birthdate: string;
  }

  const user1: Partial<User> = {
    //Partial interfacete alanların hepsine soru işareti atmak ile aynı, boş geçebiliyoruz
    name: "enes",
    age: 15,
  };

  interface User1 {
    name?: string;
    age?: number;
    lastname?: string;
    tckn?: string;
    birthdate?: string;
  }

  // const user1: Required<User1> = {
  //   //Required interfacete alanların hepsinin setlenmesi zorunmlu hale geliyor
  //   name: "enes",
  //   age: 15,
  // };

  interface User3 {
    name: string;
    age?: number;
    lastname?: string;
    tckn?: string;
    birthdate?: string;
  }

  const user3: Readonly<User3> = {
    name: "enes",
    age: 15,
  };

  // user3.name = "ali";
  // console.log(user3.name);

  interface User4 {
    name: string;
    age: number;
    lastname: string;
    tckn: string;
    birthdate: string;
  }

  const user4: Pick<User4, "name" | "age"> = {
    name: "enes",
    age: 15,
  };

  interface User5 {
    name: string;
    age: number;
    lastname: string;
    tckn: string;
    birthdate: string;
  }

  const user5: Omit<User5, "name" | "age"> = {
    lastname: "karakus",
    tckn: "213213213",
    birthdate: "12321321",
  };

  return (
    <>
      <div></div>
    </>
  );
}

export default App;
