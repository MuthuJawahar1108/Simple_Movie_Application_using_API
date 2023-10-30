//d6ae06e7

const API_URL = "http://www.omdbapi.com?apikey=d6ae06e7";


const searchMovies = async(title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    console.log(response);
    const data = await response.json();
    console.log(data);
    console.log(data.Search);
}

searchMovies("Spiderman");