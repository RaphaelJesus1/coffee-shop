import React, {ReactFragment} from "react";
import "./App.css";
import NavBar from "./components/navbar/navbar";
import About from "./components/about/about";

function App() {
  return (
    <React.Fragment>
    <NavBar/>
    <About/>
    </React.Fragment>
  );
}

export default App;
