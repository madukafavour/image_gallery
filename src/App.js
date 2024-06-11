import './index.css';
import React, { useState } from 'react';
import SearchBar from './search';
import ImageCard from './imagecard';
import Loading from './loading';
import Gallery from './Gallery';

function App() {
  const [page, setPage] = useState(1);
  const [term, setTerm] = useState('');
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleNextPage = () => {
    setPage(prevPage => prevPage + 1);
  };

  const handlePreviousPage = () => {
    setPage(prevPage => (prevPage > 1 ? prevPage - 1 : 1));
  };
  
  return (
    <div className="container">
      <SearchBar setTerm={setTerm} />
      <div className='image-container'>
        { Gallery.map((image, index) => <ImageCard key={index} image={image} />)}
      </div>
      <div className='button-container'>
        <button onClick={handlePreviousPage} className='prevbutton'>Previous &#8592;</button>
        <button onClick={handleNextPage} className='nextbutton'>Next &#8594;</button>
      </div>
    </div>
  );
}

export default App;
