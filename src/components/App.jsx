import { useState, useEffect } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import Button from './Button/Button';
import fetchImg from './helpers/api';

const App = () => {
  const [gallery, setGallery] = useState([]);
  const [page, setPage] = useState(1);
  const [textFind, setTextFind] = useState('');
  const [isLoad, setIsLoad] = useState(false);
  const [totalHits, setTotalHits] = useState(0);
  const perPage = 12;

  const handleTextSubmit = value => {
    if (!value) return;

    setGallery([]);
    setPage(1);
    setTextFind(value);
    setIsLoad(false);
    setTotalHits(0);
  };

  useEffect(() => {
    if (!textFind) return;

    setIsLoad(true);
    fetchImg(page, textFind, perPage)
      .then(data => {
        setGallery(prev => [...prev, ...data.hits]);
        setTotalHits(data.totalHits);
      })
      .catch(e => console.error('API Error:', e))
      .finally(() => {
        setIsLoad(false);
      });
  }, [textFind, page]);

  const handleLoadMore = () => {
    setPage(page + 1);
    setIsLoad(true);
  };

  return (
    <div className="App">
      <Searchbar onSubmit={handleTextSubmit} />
      <ImageGallery data={gallery} />
      {isLoad && <Loader />}
      {gallery.length > 0 && totalHits > page * perPage && !isLoad && (
        <Button onClick={handleLoadMore} />
      )}
    </div>
  );
};

export default App;
