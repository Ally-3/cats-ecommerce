import React, { useEffect, useState } from 'react';
import './cat.css';

const CatImages = ({ cats }) => {
  // Check if there are cats available
  if (cats.length === 0) {
    return <div className='noCatImg'>No cat images available</div>;
  }

  const randomIndex = Math.floor(Math.random() * cats.length);

    // Check if the selected cat has an image property
    // Generate a random index to select a random cat
    if (!cats[randomIndex].image || !cats[randomIndex].image.url) {
        return <div className="cat-image">No cat image URL available</div>;
      }

  // Get the image URL of the randomly selected cat
  const imageUrl = cats[randomIndex].image.url;

  return (
    <div>
      {/* Display the cat image */}
      <img id="image-cat" className="cat-image" alt="Cat" src={imageUrl} />
    </div>
  );
};

export default CatImages;
