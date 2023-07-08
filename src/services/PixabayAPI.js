import axios from 'axios';
import { Notify } from 'notiflix';

export class PixabayAPI {
  constructor(initPage = 1, initPerPage = 40) {
    this.#curPage = initPage;
    this.#perPage = initPerPage;
  }

  #BASE_URL = 'https://pixabay.com/api/';
  #query = '';
  #curPage = 1;
  #perPage = 12;
  #totalHits = 0;
  #API_KEY = '36098087-1a56f41df652eefc24b37e33b';

  async getPicturesByQuerry() {
    const params = new URLSearchParams({
      key: this.#API_KEY,
      q: this.#query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page: this.#curPage,
      per_page: this.#perPage,
    });

    const url = `${this.#BASE_URL}?${params}`;

    try {
      const response = await axios.get(url);
      this.#totalHits = response.data.totalHits;
      return response.data;
    } catch (e) {
      Notify.failure('error');
    }
  }

  nextPage() {
    this.#curPage++;
  }
  resetPage() {
    this.#curPage = 1;
  }
  set query(newQuery) {
    this.#query = newQuery;
  }
  get query() {
    return this.#query;
  }
  set page(newPage) {
    this.#curPage = newPage;
  }
  get page() {
    return this.#curPage;
  }
  get totalHits() {
    return this.#totalHits;
  }
  set perPage(newPerPage) {
    this.#perPage = newPerPage;
  }
  get perPage() {
    return this.#perPage;
  }
}
