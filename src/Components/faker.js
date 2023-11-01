import React from 'react';
import { animal } from '@faker-js/faker';

function RandomCat() {
  const randomCat = animal.cat();

  return (
    <div>
      <h2>A Random Cat</h2>
      <p>Type: {randomCat}</p>
    </div>
  );
}

export default RandomCat;