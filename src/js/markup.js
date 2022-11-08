export function createMarkup(popularFilms) {
  return popularFilms
    .map(({ id, genre_ids, title, poster_path, backdrop_path }) => {
      let defaultPoster = `https://image.tmdb.org/t/p/w500/${poster_path}`;
      if (poster_path === null) {
        defaultPoster =
          'https://cdn.shopify.com/s/files/1/0378/3989/products/MimsUkrainePosterDigitalDownload-01_2048x.jpg';
      }

      return `<li class="markup-list__item">
        <a class="link" href="${poster_path}"
          ><img src="${defaultPoster}" alt="${title}" width="250" height="400" />
          <p>Title: ${title}</p>
          <p>genre_ids: ${genre_ids}</p>
          <p>id: ${id}</p
        ><button class="play__movie" id="${id}" type="button">>>play:${id}<<</button></a>        
      </li>`;
    })
    .join('');
}
