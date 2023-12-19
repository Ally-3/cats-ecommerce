import React from 'react';
import { faker } from '@faker-js/faker';
import '../App.css';
import catlogo from '../images/catlogo.png';

function RandomCat() {
  const randomCat = faker.animal.cat();

  return (
    <div className='randomcat-container'>
      <h2><img src={catlogo} alt="Cat Logo" />  
        Here is a random cat:</h2>
      <p>Type: {randomCat}</p>
    </div>
  );
}

export default RandomCat;