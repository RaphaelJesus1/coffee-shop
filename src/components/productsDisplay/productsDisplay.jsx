import React from "react";
import "./productsDisplay.css";
import Card from "../../UI/card";
import Products from '../../assets/mock-data/products.json';

const productsDisplay = () => {
  console.log(Products)
  return (
    <div className="container_product-display">
      <div className="product-column">
        <div className="product-column-child">
          <div>
            <h1>Conheça nossos produtos: </h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
          </div>
          <button>Ver todos</button>
        </div>
      </div>
      <div className="product-slider">
        {Products.data.length > 0 && Products.data.map((product) =>
          <Card key={product.id} name={product.name} description={product.description} price={product.price} imageUrl={product.imageUrl} />        
        )}
      </div>
    </div>
  );
};

export default productsDisplay;
