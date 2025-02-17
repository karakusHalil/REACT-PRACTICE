import { useState } from "react";
import Content from "./components/content/Content";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
// import "./App.css";


function App() {
  const [generalCount2,setGeneralCount2] = useState(0);
  function incrementGeneralCount2(){
    setGeneralCount2(generalCount2 + 1);
  }
  console.log(generalCount2);
  
  return (
    <>
      <Navbar generalCount2 = {generalCount2}/>
      <Header />
      <Content generalCount2 = {generalCount2} setGeneralCount2={setGeneralCount2} incrementGeneralCount2={incrementGeneralCount2}/>
      <Footer />
    </>
  );
}

export default App;
