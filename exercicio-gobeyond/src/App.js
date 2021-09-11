import React from "react"
import styled from "styled-components";
import Footer from "./components/Footer";
import Header from "./components/Header";
import News from "./components/News";
import ProductList from "./components/ProductList";
import Sliders from "./components/Sliders";

const Text = styled.h3`
  margin: 30px;
  color: #000000;
  font-size: 20px;
  
`

function App() {
  return (
    <div >
      <Header/>
      <Sliders/>
      
   <Text>Mais vendidos:</Text> 
    <ProductList/>
    <News/>
    <Footer/>
    </div>
  );
}

export default App;
