import { useState, useEffect } from 'react';
import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '40927479-979dc1e063dd35baea9918adf';

const useFetchImg = (page = 1, info, perPage) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const params = new URLSearchParams({
          key: API_KEY,
          page: page,
          q: info,
          per_page: perPage,
          image_type: 'horizontal',
          safesearch: 'true',
        });
        const response = await axios.get(`${BASE_URL}?${params}`);
        setImages(response.data.hits); 
      } catch (error) {
        setError(
          'Помилка при завантаженні зображень. Будь ласка, спробуйте ще раз.'
        );
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [page, info, perPage]);

  return { loading, error, images };
};

export default useFetchImg;
