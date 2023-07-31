import axios from 'axios';

// Added default API_KEY
axios.defaults.headers.common['x-api-key'] =
  'live_WU3qNW7HCGgc9ygOkysxRpFXZrESXftSjzKXfEP6AiHj02s1uf3NyjBqcYglzxCa';

//* Added Private Class Elements
axios.defaults.baseURL = 'https://api.thecatapi.com/v1/'
// const BASE_URL = 'https://api.thecatapi.com/v1/';
const END_POINTS_BREEDS = 'breeds';
const END_POINTS_IMAGES_SEARCH = 'images/search';

// --------- Function which return all the cats (promise) ---------
export function fetchBreeds() {
  const url = `breeds`;
  return axios
    .get(url)
    .then(resp => {
      return resp.data;
    })
    .catch(error => {
      throw new Error('Error details:', error.message);
    });
}

// --------- Function which return the cat (promise) by ID ---------
export function fetchCatByBreed(breedId) {
  const url = `images/search?breed_ids=${breedId}`;
  return axios
    .get(url)
    .then(resp => {
      return resp.data;
    })
    .catch(error => {
      throw new Error('Details of cat search Error:', error.message);
    });
}
