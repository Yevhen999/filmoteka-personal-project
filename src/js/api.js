import axios from 'axios';
const API_KEY = '9593e82df53f500ce20f9f064c8219d2';

export class Films {
  #query = '';

  async getTrendingFilms() {
    const data = await fetch(
      `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`
    );
    return data;
  }

  async getSearchMovie() {
    const searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${
      this.#query
    }&page=1&include_adult=false`;
    const dataMovie = await axios.get(searchUrl);
    // const data = await dataMovie.json();
    // const { dataMovie } = await axios.get(searchMovieUrl);
    return dataMovie;
  }

  // async getImages() {
  //   const url = `https://pixabay.com/api/?key=30605118-54820a4d2e3a7aef14eca812a&q=${
  //     this.#searchQuery
  //   }&image_type=photo&orientation=horizontal&safesearch=true&per_page=${
  //     this.#perPage
  //   }&page=${this.#page}`;
  //   const { data } = await axios.get(url);
  //   return data;
  // }

  async fetchVideoById(id) {
    const dataVideo = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=en-US`
    );
    return dataVideo;
  }

  set query(searchQuery) {
    this.#query = searchQuery;
  }

  get query() {
    return this.#query;
  }
}
