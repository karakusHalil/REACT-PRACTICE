import Header from "./components/Header";
import PageContainer from "./container/PageContainer";
import "./App.css";
import RouterConfig from "./config/RouterConfig";
import Loading from "./components/Loading";

function App() {
  return (
    <>
      <div>
        <PageContainer>
          <Loading />
          <Header />
          <RouterConfig />
        </PageContainer>
      </div>
    </>
  );
}

export default App;
