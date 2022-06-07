import React, { ReactFragment, useEffect, useState } from "react";
import "./App.css";
import NavBar from "./components/navbar/navbar";
import About from "./components/about/about";
import ProductDisplay from "./components/productsDisplay/productsDisplay";
import Cart from "./components/cart/cart";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cartList, setCartList] = useState([]);
  const [numberOfItems, setNumberOfItems] = useState(0);

  useEffect(() => {
    if (cartList.length > 0) {
      let totalNumberOfItems = 0;
      cartList.forEach((item) => {
        totalNumberOfItems = totalNumberOfItems + item.amount;
      });
      setNumberOfItems(totalNumberOfItems);
    }
  }, [cartList]);

  return (
    <React.Fragment>
      <NavBar setIsModalOpen={setIsModalOpen} numberOfItems={numberOfItems} />
      <About />
      <Cart
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        list={cartList}
        setList={setCartList}
      />
      <ProductDisplay listhandler={setCartList} cartList={cartList} />
    </React.Fragment>
  );
}

export default App;
