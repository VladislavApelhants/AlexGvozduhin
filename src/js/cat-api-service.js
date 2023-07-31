import axios from 'axios';

axios.defaults.headers.common['x-api-key'] =
  'live_WU3qNW7HCGgc9ygOkysxRpFXZrESXftSjzKXfEP6AiHj02s1uf3NyjBqcYglzxCa';

axios.defaults.baseURL = 'https://api.thecatapi.com/v1';

// --------- Function which return all the cats (promise) ---------
export async function fetchBreeds() {
  try {
    const resp = await axios.get(`/breeds`);
    return resp.data;
  } catch (error) {
    throw new Error('Error details:' + error.message);
  }
}

// --------- Function which return the cat (promise) by ID ---------
export async function fetchCatByBreed(breedId) {
  try {
    const resp = await axios.get(`/images/search?breed_ids=${breedId}`);
    return resp.data;
  } catch (error) {
    throw new Error('Details of cat search Error:' + error.message);
  }
}
