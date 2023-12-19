import React from 'react';
import './cat.css';

const CatImages = ({ cats }) => {
  // Check if there are cats available
  if (cats.length === 0) {
    return <div className="cat-image">No cat images available</div>;
  }

  const randomIndex = Math.floor(Math.random() * cats.length);

  // Check if the selected cat has an image property and URL
  const selectedCat = cats[randomIndex];

  // Check if selectedCat is defined and has an image property
  if (!selectedCat || !selectedCat.image) {
    return <div className="cat-image">No cat image available</div>;
  }

  const imageUrl = selectedCat.image.url;

  return (
    <div>
      {/* Display the cat image */}
      <img id="image-cat" className="cat-image" alt="Cat" src={imageUrl} />
    </div>
  );
};

export default CatImages;
