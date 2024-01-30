import { useState, useEffect } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import Button from './Button/Button';
import fetchImg from './helpers/api';

const App = () => {
  const [galleryData, setGalleryData] = useState({
    images: [],
    page: 1,
    totalHits: 0,
  });
  const [textFind, setTextFind] = useState('');
  const [perPage] = useState(12);
  const [isLoad, setIsLoad] = useState(false);

  const handleTextSubmit = value => {
    if (!value) return;

    setTextFind(value);
    setGalleryData({ images: [], page: 1, totalHits: 0 });
  };

  useEffect(() => {
    const fetchData = async () => {
      if (!textFind) return;

      setIsLoad(true);

      try {
        const data = await fetchImg(galleryData.page, textFind, perPage);
        setGalleryData(prevData => ({
          images: [...prevData.images, ...data.hits],
          page: prevData.page + 1,
          totalHits: data.totalHits,
        }));
      } catch (error) {
        console.error('API Error:', error);
      } finally {
        setIsLoad(false);
      }
    };

    fetchData();
  }, [galleryData.page, perPage, textFind]);

  const handleLoadMore = () => {
    setIsLoad(true);
  };

  return (
    <div className="App">
      <Searchbar onSubmit={handleTextSubmit} />
      <ImageGallery data={galleryData.images} />
      {isLoad && <Loader />}
      {galleryData.images.length > 0 &&
        galleryData.totalHits > galleryData.page * perPage &&
        !isLoad && <Button onClick={handleLoadMore} />}
    </div>
  );
};


export default App;
