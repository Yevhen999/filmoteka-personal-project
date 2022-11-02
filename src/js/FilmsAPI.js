const API_KEY = '9593e82df53f500ce20f9f064c8219d2';

export class Films {
  async getFilms() {
    const data = await fetch(
      `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`
    );
    return data;
  }

  // async getVideoById() {
  //   const dataVideo = await fetch(
  //     `https://api.themoviedb.org/3/movie/{movie_id}/videos?api_key=${API_KEY}&language=en-US`
  //   );
  //   return dataVideo;
  // }
}
