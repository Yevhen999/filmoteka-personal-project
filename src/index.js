import { Films } from './js/FilmsAPI';
import { createMarkup } from './js/markup';
import { refs } from './js/refs';
const films = new Films();

async function handle() {
  const dataResult = await films.getFilms();
  const data = await dataResult.json();
  console.log(data);
  const markup = createMarkup(data.results);
  // console.log(markup);
  refs.listFilms.innerHTML = markup;
}

handle();
// createMarkup(filmsWait);
