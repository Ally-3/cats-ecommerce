import React, { useState, useEffect } from 'react';
import { faker } from '@faker-js/faker';
import '../Components/cat.css';

const BuyCats = (props) => {
  const [cats, setCats] = useState([]);
  const [catData, setCatData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const url = `https://api.thecatapi.com/v1/breeds`;
    const api_key = "live_91UUUxVS7iytjEtAwTDR1X60zOggJPrrqkT2ZXkj3s7WxqfRWwRiwt6oPR54dHr1";
    setLoading(true);

    fetch(url, {
      headers: {
        'x-api-key': api_key
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setCats(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []); // Empty dependency array to ensure the effect runs only once

  // Generate random cat data once and store them in the component's state
  // this way stops a re-render that generates new values
  // the buy button uses data from catData when clicked
  useEffect(() => {
    if (cats.length > 0) {
      const generatedCatData = Array.from({ length: 12 }).map(() => {
        const randomCat = cats[Math.floor(Math.random() * cats.length)];

        // Additional checks to ensure necessary properties are present
        const imageUrl = randomCat?.image?.url || '';
        const name = faker.person.firstName();
        const price = faker.commerce.price();
        const breed = faker.animal.cat();

        return { name, price, breed, imageUrl, inBasket: false };
      });

      setCatData(generatedCatData);
    }
  }, [cats]);

  let clickBuy = (event, { name, breed, price, imageUrl , inBasket }, index) => {
    console.log('Buy button clicked!');
    event.preventDefault();

    if (!inBasket && typeof props.onBuyChange === 'function') {
      props.onBuyChange({ name, breed, price, imageUrl });
      setCatData((prevCatData) =>
      prevCatData.map((cat, i) =>
        i === index ? { ...cat, inBasket: true } : cat
      )
    );
};
    console.log(name, breed, price, imageUrl);
  };

  return (
    <div className="cat-parent">
      {loading ? (
        <h1 style={{width: '100%', height: '100vh', margin: 0,  backgroundSize: '100% 100%' }}>Loading...</h1>
      ) : (
        catData.map((cat, index) => (
          <div key={index} className="cat-child">
            <div className="cat-image">
              {cat.imageUrl ? (
                <img id="image-cat" className="cat-image" alt="Cat" src={cat.imageUrl} />
              ) : (
                <div className="cat-image">No cat images available</div>
              )}
            </div>
            <div>
              <h3 className="cat-name">Name: {cat.name} </h3>
              <h3 className="cat-breed">Breed: {cat.breed}</h3>
              <h3 className="cat-price">Price: £{cat.price}</h3>
              <button
                className={`buy-button ${cat.inBasket ? 'in-basket' : ''}`}
                data-item-price={cat.price}
                onClick={(event) => clickBuy(event, cat, index)}
              >
                {cat.inBasket ? 'In Basket' : 'Buy now'}
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
  
};

export default BuyCats;
