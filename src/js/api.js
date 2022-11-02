const API_KEY = '9593e82df53f500ce20f9f064c8219d2';

export class Films {
  async getTrendingFilms() {
    const data = await fetch(
      `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`
    );
    return data;
  }

  async fetchVideoById(id) {
    const dataVideo = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?api_key=9593e82df53f500ce20f9f064c8219d2&language=en-US`
    );
    return dataVideo;
  }
}
