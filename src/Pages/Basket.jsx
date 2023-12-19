import React from "react";
import { useState} from 'react';
import { CatImages } from "../Components/CatImages";
import '../Components/cat.css';

function Basket({ basketItems }) {
    return (
      <div>
        <h2>Your Basket</h2>
        {basketItems.length === 0 ? (
          <p>Your basket is empty.</p>
        ) : (
          <ul className="basket-parent">
            {basketItems.map((item, index) => (
                <li className="basket-child" key={index}>
                    <div className="cat-images">
                        <img src={item.imageUrl} alt={`Cat ${index + 1}`} />
                    </div>
                    <div>
                        {item.name}<br />{item.breed}<br />£{item.price}
                    </div>
                </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
  
  export default Basket;