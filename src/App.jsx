import React, {ReactFragment} from "react";
import "./App.css";
import NavBar from "./components/navbar/navbar";
import About from "./components/about/about";
import ProductDisplay from "./components/productsDisplay/productsDisplay";

function App() {
  return (
    <React.Fragment>
      <NavBar/>
      <About/>
      <ProductDisplay/>
    </React.Fragment>
  );
}

export default App;
