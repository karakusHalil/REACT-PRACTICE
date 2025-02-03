import UserList from "./components/UserList";
import Button from "./components/Button";
import Card from "./components/Card";
import "./App.css";

function App() {
  const firstname = "Halil Karakuş";
  const cardTitle = "Props Title";
  const description =
    "Kendi oluşturduğumuz card componentinin açıklama kısmını props ile aldık...";
  const cardImage = "https://picsum.photos/300/200?random=2";
  const cities = ["İstanbul", "İzmir", "Ankara", "Konya", "Sivas"];
  const mapCities = cities.map((city, index) => <li key={index}>{city}</li>);
  const products = [
    {
      id: 1,
      name: "Toshiba Laptop",
      stock: 15,
      price: 15000,
      category: "Bilgisayar",
    },
    {
      id: 2,
      name: "Phlips Amered",
      stock: 10,
      price: 24000,
      category: "Televizyon",
    },
    { id: 3, name: "Xiomi", stock: 5, price: 1000, category: "Telefon" },
    { id: 4, name: "Iphone 16", stock: 20, price: 115000, category: "Telefon" },
    {
      id: 4,
      name: "Monster Laptop",
      stock: 40,
      price: 30000,
      category: "Bilgisayar",
    },
  ];
  const styles = {
    h3Style: {
      backgroundColor: "blue",
      color: "orange",
      padding: "5px",
    },
  };
  return (
    <>
      <Card
        cardTitle={cardTitle}
        description={description}
        cardPicture={cardImage}
      />

      <h2 style={{ backgroundColor: "blue", color: "purple" }}>City List</h2>
      <ul>
        {cities.map((city, index) => (
          <li key={index}>{city}</li>
        ))}
      </ul>

      <h2 style={{ backgroundColor: "blue", color: "purple" }}>
        Map City List
      </h2>
      <ul>{mapCities}</ul>

      <h2 style={{ backgroundColor: "purple", color: "blue" }}>Product List</h2>
      <ul>
        {products.map((products) => (
          <li key={products.id}>{products.name}</li>
        ))}
      </ul>

      <h2>Product List By Category</h2>
      <ul>
        {products
          .filter((product) => product.category === "Bilgisayar")
          .map((product) => (
            <li key={product.id}>
              {product.name} - {product.price}
            </li>
          ))}
      </ul>

      <Button />
      <UserList />
      <h1 style={{ backgroundColor: "yellow" }}>REACT INTRO</h1>
      <p>Bu bizim ilk componentimiz</p>
      <p>{firstname}</p>
      <p>{2 + 2}</p>
      <div className="mySlides w3-display-container w3-center">
        <img src="https://picsum.photos/200/300?random=1" />
        <div className="w3-display-bottommiddle w3-container w3-text-white w3-padding-32 w3-hide-small">
          <h3 style={styles.h3Style}>Los Angeles</h3>
          <p>
            <b>We had the best time playing at Venice Beach!</b>
          </p>
        </div>
      </div>
      <InternalComponent />
      <hr />
      <SecondComponent />
    </>
  );
}

function InternalComponent() {
  return (
    <>
      <h2 style={{ color: "green", borderBottom: "2px solid red" }}>
        Yeni Component
      </h2>
      <ul>
        <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
        <li>Lorem ipsum dolor sit amet.</li>
        <li>Lorem, ipsum dolor.</li>
      </ul>
    </>
  );
}

const SecondComponent = () => {
  return (
    <>
      <h2 style={{ color: "green", borderBottom: "2px solid red" }}>
        Arrow Function Component
      </h2>
      <ul>
        <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
        <li>Lorem ipsum dolor sit amet.</li>
        <li>Lorem, ipsum dolor.</li>
      </ul>
    </>
  );
};

export default App;
