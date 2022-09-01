const watchListArr = JSON.parse(localStorage.getItem('watchlist'));
const watchListContainer = document.getElementById('watchlist-container');

watchListContainer.innerHTML = renderMovies(watchListArr);

function renderMovies(movieArray){
    const movieHTMLArr = movieArray.map((currentMovie) =>{
        return `<div class="col movie">
          <div class="card " style="width: 18rem;">
            <img src="${currentMovie.Poster}" class="card-img-top" alt="...">
            <div class="card-body">
              <div class="year">${currentMovie.Year}</div>
              <h5 class="card-title">${currentMovie.Title}</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a data-imdbid=${currentMovie.imdbID} class="btn btn-danger remove-button">Remove</a>
            </div>
          </div>
          </div>`
    })
        
    return movieHTMLArr.join('')
}

document.addEventListener('click', (e) => {
    if(e.target.classList.contains('remove-button')){
        e.preventDefault();
        const movieID = e.target.dataset.imdbid;
        const movie = watchListArr.find((currentMovie) => currentMovie.imdbID == movieID);
        watchListArr.pop(movie);
        localStorage.setItem('watchlist', JSON.stringify(watchListArr));
        watchListContainer.innerHTML = renderMovies(watchListArr);
        console.log(watchListArr);
    }
})
