const t={listFilms:document.querySelector(".markup-list")},i=new class{async getFilms(){return await fetch("https://api.themoviedb.org/3/trending/movie/week?api_key=9593e82df53f500ce20f9f064c8219d2")}};!async function(){const e=await i.getFilms(),s=await e.json();console.log(s);const n=s.results.map((({id:t,genre_ids:i,title:e,poster_path:s,backdrop_path:n})=>`<li class="markup-list__item">\n        <a class="link" href="${s}"\n          ><img src="https://image.tmdb.org/t/p/w500/${s}" alt="${e}" width="250" height="400" />\n          <p>Title: ${e}</p>\n          <p>genre_ids: ${i}</p>\n          <p>id: ${t}</p\n        ></a>\n      </li>`)).join("");t.listFilms.innerHTML=n}();
//# sourceMappingURL=index.1ce8aab2.js.map
