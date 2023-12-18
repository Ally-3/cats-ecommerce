import '../Components/cat.css';
import React from 'react';
import { faker } from '@faker-js/faker';
import { useState} from 'react';
import Cats from '../Components/Cats';
import CatImages from '../Components/CatImages';

const BuyCats= () => {

    // const url = `https://api.thecatapi.com/v1/breeds`;
    // const api_key = "live_91UUUxVS7iytjEtAwTDR1X60zOggJPrrqkT2ZXkj3s7WxqfRWwRiwt6oPR54dHr1";

    // fetch(url,{headers: {
    //     'x-api-key': api_key
    //   }})
      
    const [cats, setCats] = useState ([]);
    // Cats (setCats)
    // console.log(cats)

    return (
        <div className="cat-parent">
            {Array.from({ length: 4 }).map((_, index) => {
                const name = faker.person.firstName();
                const price = faker.commerce.price();
                const breed = faker.animal.cat();
                    return (
                    <div key={index} className="cat-child">
                        <div className="cat-image">
                            <img element={<CatImages Cats={cats} />} alt="cat"></img>
                        </div>
                        <div className="cat-h3">
                            <h3>Name : {name} </h3>
                        </div>
                        <div className="cat-bottom">
                            <p><b>Breed: </b>{breed}</p>
                        </div>
                        <div className="cat-p">
                            <p>Price: {price}</p>
                        </div>
                        <div className="buy-button">
                            <button data-item-price={price}>Buy now</button>
                        </div>
                    </div>
                    );
            })}
        </div>
)}

// document.querySelector("/buy-button").addEventListener("click", () => {

// });

// buy(){
    
// }

export default BuyCats;