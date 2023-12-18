import React from 'react';
import { faker } from '@faker-js/faker';
import '../App.css';

function RandomCat() {
  const randomCat = faker.animal.cat();

  return (
    <div className='randomcat-container'>
      <h2>🌟 Here is a random cat:</h2>
      <p>Type: {randomCat}</p>
    </div>
  );
}

export default RandomCat;