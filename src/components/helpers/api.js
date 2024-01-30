import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '40927479-979dc1e063dd35baea9918adf';

async function fetchImg(page = 1, info, perPage) {
  const params = new URLSearchParams({
    key: API_KEY,
    page: page,
    q: info,
    per_page: perPage,
    image_type: 'horizontal',
    safesearch: 'true',
  });

  return axios.get(`${BASE_URL}?${params}`).then(({ data }) => data);
}
export default fetchImg;
