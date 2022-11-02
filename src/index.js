import { Films } from './js/api';
import { createMarkup } from './js/markup';
import { refs } from './js/refs';
const basicLightbox = require('basiclightbox');
import * as basicLightbox from 'basiclightbox';

const films = new Films();

renderTrendingFilms();

refs.listFilms.addEventListener('click', playTrailer);

// render trending films//

async function renderTrendingFilms() {
  const dataResult = await films.getTrendingFilms();
  const data = await dataResult.json();
  console.log(data);
  const markup = createMarkup(data.results);
  refs.listFilms.innerHTML = markup;
}

// click on button "play" //

function playTrailer(event) {
  event.preventDefault();
  if (event.target.nodeName !== 'BUTTON') {
    return;
  }
  getVideoById(event.target.id);
}

// get id for a trailer//

async function getVideoById(currentId) {
  const dataVideo = await films.fetchVideoById(currentId);
  const dataResult = await dataVideo.json();
  const results = dataResult.results;
  const isId = searchTrailer(results);
  const instance = basicLightbox.create(` 
  <div class="modal">
  <iframe src="https://www.youtube.com/embed/${isId}" width="560" height="315" frameborder="0"></iframe></div>
  `);

  // need options for iframe //

  instance.show();
}

// saerch a trailer only in videos //

function searchTrailer(objects) {
  for (const object of objects) {
    if (object.type === 'Trailer') {
      return object.key;
    }
    // need notification here!
  }
}
