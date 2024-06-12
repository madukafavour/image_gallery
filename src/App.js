import './index.css';
import React, { useState, useEffect } from 'react';
import SearchBar from './search';
import ImageCard from './imagecard';
import Gallery from './Gallery';

function App() {
  const [term, setTerm] = useState('');
  const [filteredImages, setFilteredImages] = useState(Gallery);

  useEffect(() => {
    if (term.trim()) {
      const filtered = Gallery.filter(image => 
        image.name.toLowerCase().includes(term.toLowerCase())
      );
      setFilteredImages(filtered);
    } else {
      setFilteredImages(Gallery);
    }
  }, [term]);

  return (
    <div className="container">
      <SearchBar setTerm={setTerm} />
      <div className='image-container'>
        {filteredImages.map((image, index) => <ImageCard key={index} image={image} />)}
      </div>
    </div>
  );
}

export default App;
