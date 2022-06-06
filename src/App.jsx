import React, { ReactFragment, useState } from "react";
import "./App.css";
import NavBar from "./components/navbar/navbar";
import About from "./components/about/about";
import ProductDisplay from "./components/productsDisplay/productsDisplay";
import Cart from "./components/cart/cart";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cartList, setCartList] = useState([
    {
      name: "Café coado",
      imageUrl: "https://static.paodeacucar.com/img/uploads/1/1/656001.png",
      price: 3.45,
    },
    {
      name: "Croissant de chocolate",
      imageUrl: "https://static.paodeacucar.com/img/uploads/1/1/656001.png",
      price: 6.5,
      amount: 5,
    },
    {
      name: "Pão de batata",
      imageUrl: "https://static.paodeacucar.com/img/uploads/1/1/656001.png",
      price: 4.25,
      amount: 2,
    },
    {
      name: "Croissant de presunto e queijo",
      imageUrl: "https://static.paodeacucar.com/img/uploads/1/1/656001.png",
      price: 6.5,
    },
    {
      name: "Chocolate quente",
      imageUrl: "https://static.paodeacucar.com/img/uploads/1/1/656001.png",
      price: 12.3192,
      amount: 3,
    },
  ]);

  return (
    <React.Fragment>
      <NavBar setIsModalOpen={setIsModalOpen} />
      <About />
      <Cart
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        list={cartList}
        setList={setCartList}
      />
      <ProductDisplay/>
    </React.Fragment>
  );
}

export default App;
