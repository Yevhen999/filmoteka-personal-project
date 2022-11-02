import { Films } from './js/FilmsAPI';
import { createMarkup } from './js/markup';
import { refs } from './js/refs';
import { markupPlayer } from './js/markupPlayer';
const basicLightbox = require('basiclightbox');
import * as basicLightbox from 'basiclightbox';

const films = new Films();

async function handle() {
  const dataResult = await films.getFilms();
  const data = await dataResult.json();
  console.log(data);
  const markup = createMarkup(data.results);
  refs.listFilms.innerHTML = markup;
}

handle();

async function getVideoById(currentId) {
  const dataVideo = await fetch(
    `https://api.themoviedb.org/3/movie/${currentId}/videos?api_key=9593e82df53f500ce20f9f064c8219d2&language=en-US`
  );
  const dataResult = await dataVideo.json();
  const isId = dataResult.results[0].key;

  const instance = basicLightbox.create(` 
  <div class="modal">
  <iframe src="https://www.youtube.com/embed/${isId}" width="560" height="315" frameborder="0"></iframe></div>
  `);
  instance.show();
}

refs.listFilms.addEventListener('click', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  if (event.target.nodeName !== 'BUTTON') {
    return;
  }

  console.log(event.target);
  getVideoById(event.target.id);
}
