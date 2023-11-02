import React from 'react';
import { faker } from '@faker-js/faker';

function RandomCat() {
  const randomCat = faker.animal.cat();

  return (
    <div>
      <h2>A Random Cat</h2>
      <p>Type: {randomCat}</p>
    </div>
  );
}

export default RandomCat;