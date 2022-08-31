
const card = document.querySelector('.movie');
const movieContainer = document.querySelector('.movies-container');
const myForm = document.getElementById('search-form');

function renderMovies(movieArray){
    const movieHTMLArr = movieArray.map((currentMovie) =>{
        return `<div class="col movie">
          <div class="card " style="width: 18rem;">
            <img src="${currentMovie.Poster}" class="card-img-top" alt="...">
            <div class="card-body">
              <div class="year">${currentMovie.Year}</div>
              <h5 class="card-title">${currentMovie.Title}</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a data-imdbid=${currentMovie.imdbID} class="btn btn-primary add-button">Add</a>
            </div>
          </div>
          </div>`
    })
        
    return movieHTMLArr.join('')
}

function saveToWatchList(ID){
    const movie = movieData.find((currentMovie) =>{
        return currentMovie.imdbID == ID;
    })
    let watchlistJSON = localStorage.getItem('watchlist');
    let watchlist = JSON.parse(watchlistJSON);
    if(watchlist == null){
        watchlist = [];
    }
    watchlist.push(movie);
    watchlistJSON = JSON.stringify(watchlist);
    localStorage.setItem('watchlist', watchlistJSON);
    console.log(watchlist)
}



myForm.addEventListener('submit', (e) => {
    e.preventDefault();
    movieContainer.innerHTML = renderMovies(movieData);
})

document.addEventListener('click', function(e) {
    if(e.target.classList.contains('add-button')){
        const movieID = e.target.dataset.imdbid;
        saveToWatchList(movieID);
    }
    })

