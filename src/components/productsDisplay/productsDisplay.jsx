import React from "react";
import "./productsDisplay.css";
import Card from "../../UI/card";
import Products from '../../assets/mock-data/products.json';
import { createCommaList } from "typescript";

const productsDisplay = (props) => {
  const addItem = (item, amount) => {
    props.listhandler((prevState) => [...prevState, {id: item.id, name: item.name, price: item.price, imageUrl: item.imageUrl, amount: amount}])
  }

  const addCartItemHandler = (product) => {
    const existingCartItemIndex = props.cartList.findIndex(item => item.id === product.id);
    const existingCartitem = props.cartList[existingCartItemIndex];
    let updatedItems;

    if (existingCartitem) {
      const updatedItem = {
          ...existingCartitem,
          amount: existingCartitem.amount + 1
      };
      updatedItems = [...props.cartList];
      updatedItems[existingCartItemIndex] = updatedItem;
    }else{
      updatedItems = props.cartList.concat({id: product.id, name: product.name, price: product.price, imageUrl: product.imageUrl, amount: 1})
    }
    props.listhandler(updatedItems)
  }

  return (
    <div className="container_product-display">
      <div className="product-column">
        <div className="product-column-child">
          <div>
            <h1>Get to know our products: </h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
          </div>
          <button>see them all</button>
        </div>
      </div>
      <div className="product-slider">
        {Products.data.length > 0 && Products.data.map((product) =>
          <Card onClickButton={() => addCartItemHandler(product)} key={product.id} name={product.name} description={product.description} price={product.price} imageUrl={product.imageUrl} />        
        )}
      </div>
    </div>
  );
};

export default productsDisplay;
