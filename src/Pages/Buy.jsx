import React, { useState, useEffect } from 'react';
import { faker } from '@faker-js/faker';
import CatImages from '../Components/CatImages';

const BuyCats = (props) => {
  const [cats, setCats] = useState([]);
  const [imageUrl, setImageUrl] = useState([]);

  useEffect(() => {
    const url = `https://api.thecatapi.com/v1/breeds`;
    const api_key = "live_91UUUxVS7iytjEtAwTDR1X60zOggJPrrqkT2ZXkj3s7WxqfRWwRiwt6oPR54dHr1";

    fetch(url, {
      headers: {
        'x-api-key': api_key
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setCats(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []); // Empty dependency array to ensure the effect runs only once

  let clickBuy = ({ name, breed, price, imageUrl }) => {
    if (typeof props.onBuyChange === 'function') {
      props.onBuyChange({ name, breed, price, imageUrl });
    }
    console.log(name, breed, price, imageUrl);
  };

  return (
    <div className="cat-parent">
      {Array.from({ length: 12 }).map((_, index) => {
        const name = faker.person.firstName();
        const price = faker.commerce.price();
        const breed = faker.animal.cat();
        return (
          <div key={index} className="cat-child">
            <div className="cat-images">
              <CatImages cats={cats} imageUrl={imageUrl} />
            </div>
            <div>
              <h3 className="cat-name">Name: {name} </h3>
              <h3 className="cat-breed">Breed: {breed}</h3>
              <h3 className="cat-price">Price: £{price}</h3>
              <button
                className="buy-button"
                data-item-price={price}
                onClick={() => clickBuy({ name, breed, price, imageUrl })}
              >
                Buy now
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BuyCats;
