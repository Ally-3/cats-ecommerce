import '../Components/cat.css';
import cat1 from '../images/cat1.jpg';
import cat2 from '../images/cat2.jpg';
import cat3 from '../images/cat3.jpg';
import cat4 from '../images/cat4.jpg';
import catClock from '../images/catClock.png';
import React from 'react';
import { faker } from '@faker-js/faker';
import { useState} from 'react';
import Cats from './Cats';
import CatImages from './CatImages';

const CatsCard = () => {

    const url = `https://api.thecatapi.com/v1/breeds`;
    const api_key = "live_91UUUxVS7iytjEtAwTDR1X60zOggJPrrqkT2ZXkj3s7WxqfRWwRiwt6oPR54dHr1";

    fetch(url,{headers: {
        'x-api-key': api_key
      }})
      

    const [cats, setCats] = useState ([])
    Cats (setCats)
    console.log(cats)

    return (
        <div className="cat-parent">
            {Array.from({ length: 4 }).map((_, index) => {
                const name = faker.name.firstName();
                const price = faker.commerce.price();
                    return (
                    <div key={index} className="cat-child">
                        <div className="cat-image">
                            <img element={<CatImages cats={cats} />} alt="cat"></img>
                        </div>
                        <div className="cat-h3">
                            <h3>Name : {name} </h3>
                        </div>
                        <div className="cat-bottom">
                            <p><b>Breed: </b></p>
                        </div>
                        <div className="cat-p">
                            <p>Price: {price}</p>
                        </div>
                        <div className="buy-button">
                            <button>Buy now</button>
                        </div>
                    </div>
                    );
            })}
        </div>
)}

            {/* <div className="cat-child">
                <div className="cat-image">
                    <img src={cat2} alt="cat2"></img>
                </div>
                <div className="cat-h3">
                    <h3>Name</h3>
                </div>
                <div className="cat-p">
                    <p>Price</p>
                </div>
                <div className="cat-bottom">
                    <p><img src={catClock} alt="cat2"></img> 1h | <b>Breed</b></p>
                </div>
                <div className="buy-button">
                    <button>Buy now</button>
                </div>
            </div> */}

            {/* <div className="cat-child">
                <div className="cat-image">
                    <img src={cat3} alt="cat3"></img>
                </div>

                <div className="cat-h3">
                    <h3>Name</h3>
                </div>
                <div className="cat-p">
                    <p>Price</p>
                </div>
                <div className="cat-bottom">
                    <p><img src={catClock} alt="cat Clock"></img> 2h | <b>Breed</b></p>
                </div>
                <div className="buy-button">
                    <button>Buy now</button>
                </div>
            </div>

            <div className="cat-child">
                <div className="cat-image">
                    <img src={cat4} alt="cat4"></img>
                </div>
                <div className="cat-h3">
                    <h3>Name</h3>
                </div>
                <div className="cat-p">
                    <p>Price</p>
                </div>
                <div className="cat-bottom">
                    <p><img src={catClock} alt="cat Clock"></img> 10m | <b>Breed</b></p>
                </div>
                <div className="buy-button">
                    <button>Buy now</button>
                </div>
            </div> */}
            {/* <div className="cat-child">
                <div className="cat-image">
                    <img src={cat5} alt="cat5"></img>
                </div>
                <div className="cat-h3">
                    <h3>Name</h3>
                </div>
                <div className="cat-p">
                    <p>Price</p>
                </div>
                <div className="cat-bottom">
                    <p><img src={catClock} alt="cat Clock"></img> 10m | <b>Breed</b></p>
                </div>
                <div className="buy-button">
                    <button>Buy now</button>
                </div>
            </div> */}
            {/* <div className="cat-child">
                <div className="cat-image">
                    <img src={cat6} alt="cat6"></img>
                </div>
                <div className="cat-h3">
                    <h3>Name</h3>
                </div>
                <div className="cat-p">
                    <p>Price</p>
                </div>
                <div className="cat-bottom">
                    <p><img src={catClock} alt="cat Clock"></img> 10m | <b>Breed</b></p>
                </div>
                <div className="buy-button">
                    <button>Buy now</button>
                </div>
            </div> */}
        //</div>


// document.querySelector("/buy-button").addEventListener("click", () => {

// });

// buy(){
    
// }

export default CatsCard;