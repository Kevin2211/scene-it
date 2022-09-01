
const card = document.querySelector('.movie');
const movieContainer = document.querySelector('.movies-container');
const myForm = document.getElementById('search-form');

function renderMovies(movieArray){

    const movieHTMLArr = [];
    movieArray.forEach((currentMovie) =>{
        if(currentMovie.Poster == 'N/A'){
            currentMovie.Poster = `https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/330px-No-Image-Placeholder.svg.png`;
        }
        console.log(currentMovie);
        const movie = `<div class="col movie">
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
        movieHTMLArr.push(movie);

    })
    console.log(movieArray)   
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
}



myForm.addEventListener('submit', async (e) => {
    try {
            e.preventDefault();
    const searchString = document.getElementById('search-bar').value;
    const urlEncodedSearchString = encodeURIComponent(searchString);
    const searchquery = await fetch(`http://www.omdbapi.com/?apikey=59354c85&s=${urlEncodedSearchString}`);
    const searchResult = await searchquery.json();
    movieData = searchResult.Search;
    movieContainer.innerHTML = renderMovies(searchResult.Search);

    } catch (error) {
        console.log(error);
    }

})

document.addEventListener('click', function(e) {
    if(e.target.classList.contains('add-button')){
        const movieID = e.target.dataset.imdbid;
        saveToWatchList(movieID);
        e.target.classList.remove('btn-primary');
        e.target.classList.add('btn-success');
        e.target.textContent = 'Added!'
    }
    })

