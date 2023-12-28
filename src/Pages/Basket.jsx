import React from "react";
import '../Components/cat.css';
import '../App.css';

function Basket({ cat, basketItems, setBasketItems }) {

    const handleDelete = (index) => {
    // Filter out the basketItems array to remove the item we want to delete
    const updatedBasket = basketItems.filter((_, i) => i !== index);
    setBasketItems(updatedBasket);
  };

    return (
      <div className="basket-container">
      <div className="basket-bg">
        <h2 className="basket-title">Your Basket</h2>
        {basketItems.length === 0 ? (
          <p>Your basket is empty.</p>
        ) : (    
          <ul className="basket-parent">
            {basketItems.map((item, index) => (
                <li className="basket-child" key={index}>
                    
                    <div className="cat-image">
                    {item.imageUrl ? (
                      <img id="image-cat" className="cat-image" alt="Cat" src={item.imageUrl} />
                    ) : (
                      <div className="cat-image">No cat images available</div>
                    )}
                  </div>

                    <div className="basket-text">
                        Name:   {item.name}<br />
                        <div className="cat-breed">Breed:  {item.breed}</div><br />
                        <br></br>
                        {/* Price:  £{item.price} */}
                      <div className="basket-text-end">
                          <p>Price:  £{item.price}</p>
                          <button 
                              type="button" 
                              onClick={() => handleDelete(index)} // Pass the index to handleDelete
                              className="bin-btn"
                          >🗑️</button>
                      </div>
                    </div>
                </li>
            ))}
                <div className="basket-checkout">
                  <p>Total:{basketItems.reduce((sum, item) => sum + Number(item.price), 0).toLocaleString('en-GB', { style: 'currency', currency: 'GBP' })}</p><br />
                  <button className="chk-btn">Proceed to checkout</button>
                </div>
          </ul>
          )}
 
          </div>
        </div>
  );
}
  
  export default Basket;