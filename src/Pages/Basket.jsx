import React from "react";
import { useState} from 'react';
import { CatImages } from "../Components/CatImages";
import '../Components/cat.css';
import '../App.css';

function Basket({ basketItems }) {
    return (
      <div className="body-container">
        <h2 className="basket-title">Your Basket</h2>
        {basketItems.length === 0 ? (
          <p>Your basket is empty.</p>
        ) : (
          <ul className="basket-parent">
            {basketItems.map((item, index) => (
                <li className="basket-child" key={index}>
                    <div>
                        <img className="cat-image" src={item.imageUrl} alt={`Cat ${index + 1}`} />
                    </div>
                    <div className="basket-text">
                        Name:   {item.name}<br />
                        Breed:  {item.breed}<br />
                        <br></br>
                        Price:  £{item.price}
                    </div>
                </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
  
  export default Basket;