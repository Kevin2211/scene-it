
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
              <a href="#" class="btn btn-primary">Add</a>
            </div>
          </div>
          </div>`
    })
        
    return movieHTMLArr.join('');
}



myForm.addEventListener('submit', (e) => {
    e.preventDefault();
    movieContainer.innerHTML = renderMovies(movieData);
})

