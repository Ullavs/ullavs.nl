// - + button --> saving to local storage
// - when + button hit --> unable + button
// - - button --> removing from local storage
// - - button --> list re-ordering

// when the watchlist is empty --> watchlist is empty --> add movies

// NICE TO HAVES
// - loading state
// - search bar leeg als je hebt ingevuld
// - zonder data -> opvulmateriaal
// - when text description is too long --> ... read more
// - in case of 10 or more movies --> extra page (or show more)
// - order list to A-Z / Z-A
// - searchbar wordt wit (= lelijk!)

const API_KEY = "2a7ca420";
const API_URL = `https://www.omdbapi.com/?apikey=${API_KEY}&type=movie`;
const searchBar = document.getElementById("search-bar");
const searchInput = document.getElementById("search");
const movieList = document.getElementById("movie-list");
const startExploring = document.getElementById("start-exploring");
const unableToFind = document.getElementById("unable");

searchBar.addEventListener("submit", (event) => {
  event.preventDefault();
  const searchTerm = searchInput.value;

  fetch(`${API_URL}&s=${searchTerm}`)
    .then((res) => {
      if (!res.ok) {
        throw Error("Search is unavailable");
      }
      return res.json();
    })
    .then((data) => fetchMovies(data.Search))
    .then((movies) => showMovies(movies))
    .catch((err) => showNoResults());
});

const fetchMovies = (movieResults) => {
  return Promise.all(
    movieResults.map((movieResult) => {
      return fetch(`${API_URL}&i=${movieResult.imdbID}`);
    })
  ).then((responses) =>
    Promise.all(responses.map((response) => response.json()))
  );
};

const showMovies = (movies) => {
  const moviesHtml = movies.map((movie) => {
    const poster = movie.Poster;
    const title = movie.Title;
    const rating = movie.imdbRating;
    const duration = movie.Runtime;
    const genre = movie.Genre;
    const summary = movie.Plot;

    return `
      <div class="movie-result">
        <img
          class="movie-poster"
          src="${poster === "N/A" ? "default-movie-poster.jpg" : poster}"
          alt="movie poster"
          width="300"
          height="447"
        />
        <div class="title-rating">
          <h3 class="movie-title">${title}</h3>
          <span class="movie-rating"
            ><img
              class="rating-icon"
              src="star-icon.svg"
              width="15"
              height="15"
              alt="rating icon"
            /> ${rating}</span
          >
        </div>
        <div class="movie-details">
          <span class="movie-duration">${duration}</span>
          <span class="movie-genre">${genre}</span>
          <button class="add-watchlist">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                class="plus-icon"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM9 5C9 4.44772 8.55228 4 8 4C7.44772 4 7 4.44772 7 5V7H5C4.44772 7 4 7.44771 4 8C4 8.55228 4.44772 9 5 9H7V11C7 11.5523 7.44772 12 8 12C8.55228 12 9 11.5523 9 11V9H11C11.5523 9 12 8.55228 12 8C12 7.44772 11.5523 7 11 7H9V5Z"
                fill="#111827"
              />
            </svg>
            Watchlist
          </button>
        </div>
        <p class="movie-summary">
          ${summary}
        </p>
      </div>
    `;
  });

  movieList.innerHTML = moviesHtml.join("");
  startExploring.style.display = "none";
  unableToFind.style.display = "none";
  movieList.style.display = "block";
};

const showNoResults = () => {
  movieList.style.display = "none";
  startExploring.style.display = "none";
  unableToFind.style.display = "grid";
};
