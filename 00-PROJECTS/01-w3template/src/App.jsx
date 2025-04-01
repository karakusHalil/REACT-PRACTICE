import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Modal from "./components/Modal";
import CardList from "./components/CardList";
import SectionOne from "./components/SectionOne";
import SectionTwo from "./components/SectionTwo";
import ShadowPaper from "./components/ShadowPaper";
import Cars from "./components/Cars";
import Table from "./components/Table";
import Forms from "./components/Forms";
import ProgressBar from "./components/ProgressBar";
import SlideShow from "./components/SlideShow";
import Navigation from "./components/Navigation";
import Pagination from "./components/Pagination";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      {/* <!-- Side Navigation --> */}
      <Navbar />

      {/* <!-- Header --> */}
      <Header />

      {/* <!-- Modal --> */}
      <Modal />

      <CardList />

      <SectionOne />

      <SectionTwo />

      <ShadowPaper />

      <Cars />
      <Table />
      <Forms />

      <ProgressBar />

      <SlideShow />

      <Navigation />

      <Pagination />

      {/* <!-- Footer --> */}
      <Footer />
    </>
  );
}

export default App;
