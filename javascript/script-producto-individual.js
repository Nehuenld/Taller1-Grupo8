const section = document.querySelector('section');
const row = document.getElementById("container-pelicula");

const requestURL = 'https://api.themoviedb.org/4/list/7113794?language=es&api_key=dc3b22860cde29d18263951f0f48ee4a&page=1';
const request = new XMLHttpRequest();
var movies = '';
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
    movies = request.response;
    crearPelicula();
}
let listadoPeliculas2 = movies.results;



function crearPelicula() {

    let params = new URLSearchParams(location.search);
    let id = params.get('id');
    let listadoPeliculas = movies.results;

    let myH1 = document.getElementById("titulo-producto");
    myH1.textContent = listadoPeliculas[id].title;

    let myImage = document.getElementById("imagen");
    myImage.src = 'https://image.tmdb.org/t/p/w500/' + listadoPeliculas[id].poster_path;

    let sinopsis = document.getElementById("sinopsis");
    sinopsis.textContent = listadoPeliculas[id].overview;

    let fechaEstreno = document.getElementById("fecha-estreno");
    fechaEstreno.textContent = listadoPeliculas[id].release_date;

    let generos = document.getElementById("genero");
    generos.textContent = listadoPeliculas[id].genre_ids;


    for (let i = 0; i < listadoPeliculas.length; i++) {
        //forma de llegar a más detalles de cada pelicula!
        const request2URL = `https://api.themoviedb.org/3/movie/${listadoPeliculas[i].id}?api_key=dc3b22860cde29d18263951f0f48ee4a`;
        const request2 = new XMLHttpRequest();
        var details = '';
        request2.open('GET', request2URL);
        request2.responseType = 'json';
        request2.send();
        request2.onload = function() {
            details = request2.response;
            //console.log(details.runtime);
            //crearPelicula();
        }

    }

    // console.log(details.runtime);

}

function validator() {
    let comentario = $("#comentario").val();
    if (comentario == '') {
        console.log("Ingresar comentario");
    }
}