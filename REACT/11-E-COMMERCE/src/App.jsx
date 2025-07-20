import Header from "./components/Header";
import PageContainer from "./container/PageContainer";
import "./App.css";
import ProductList from "./components/ProductList";

function App() {
  return (
    <>
      <div>
        <PageContainer>
          <Header />
          <ProductList />
        </PageContainer>
      </div>
    </>
  );
}

export default App;
