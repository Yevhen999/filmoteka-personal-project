export function createMarkup(popularFilms) {
  return popularFilms
    .map(({ id, genre_ids, title, poster_path, backdrop_path }) => {
      return `<li class="markup-list__item">
        <a class="link" href="${poster_path}"
          ><img src="https://image.tmdb.org/t/p/w500/${poster_path}" alt="${title}" width="250" height="400" />
          <p>Title: ${title}</p>
          <p>genre_ids: ${genre_ids}</p>
          <p>id: ${id}</p
        ><button class="play__movie" id="${id}" type="button">>>play:${id}<<</button></a>        
      </li>`;
    })
    .join('');
}
