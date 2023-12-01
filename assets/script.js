const API_URL = "http://www.omdbapi.com?apikey=d6ae06e7";

let searchIcon = document.getElementById("search-icon");
let searchBox = document.getElementById("text-box");
let movieCardTemplate = document.getElementById("movie-card-template");
let card = document.getElementsByClassName("card")[0];

searchIcon.addEventListener("click",async()=>{
    let title = searchBox.value;
    let searchedMovies = await searchMovies(title);
    // console.log(searchedMovies[0]);
    searchedMovies.forEach((movie)=>{
        let movieTemplateClone = document.importNode(movieCardTemplate.content,true);
        let poster = movieTemplateClone.querySelector("img");
        poster.src=movie.Poster;
        let year = movieTemplateClone.querySelector("p");
        year.textContent = movie.Year;
        let type = movieTemplateClone.querySelector("span");
        type.textContent = movie.Type;
        let title = movieTemplateClone.querySelector("h3");
        title.textContent = movie.Title;

        card.appendChild(movieTemplateClone);
    })
})



const searchMovies = async(title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    // console.log(response);
    const data = await response.json();
    const movieArray = await data.Search;

    console.log(movieArray);
    // console.log(data.Search);
    return movieArray;
}

searchMovies("Spiderman");