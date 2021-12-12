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


    //forma de llegar a más detalles de cada pelicula!
    const request2URL = `https://api.themoviedb.org/3/movie/${listadoPeliculas[id].id}?api_key=dc3b22860cde29d18263951f0f48ee4a&language=es`;
    const request2 = new XMLHttpRequest();
    var details = '';
    request2.open('GET', request2URL);
    request2.responseType = 'json';
    request2.send();
    request2.onload = function() {
        details = request2.response;
        console.log(details);
        cargarDetalles();
    }

    function cargarDetalles() {
        let duracion = document.getElementById("duracion");
        if (details.runtime != 0) {
            duracion.textContent = details.runtime + " minutos";
        } else {
            duracion.textContent = "Información no disponible";
        }

        let arrayGeneros = [];
        for (let i = 0; i < details.genres.length; i++) {
            arrayGeneros.push(details.genres[i].name);
        }
        let generos = document.getElementById("genero");
        generos.textContent = arrayGeneros.join(", ") + ".";
    }

    const requestVideoURL = `https://api.themoviedb.org/3/movie/${listadoPeliculas[id].id}/videos?api_key=dc3b22860cde29d18263951f0f48ee4a&language=es`;
    const requestVideo = new XMLHttpRequest();
    var videoURL = '';
    requestVideo.open('GET', requestVideoURL);
    requestVideo.responseType = 'json';
    requestVideo.send();
    requestVideo.onload = function() {
        videoURL = requestVideo.response;
        cargarVideo();
    }

    function cargarVideo() {
        let URLvideo = document.getElementById("URL-video");
        URLvideo.src = "https://www.youtube.com/embed/" + videoURL.results[0].key;
    }

    const requestCastURL = `https://api.themoviedb.org/3/movie/${listadoPeliculas[id].id}/credits?api_key=dc3b22860cde29d18263951f0f48ee4a&language=es`;
    const requestCast = new XMLHttpRequest();
    var reparto = '';
    requestCast.open('GET', requestCastURL);
    requestCast.responseType = 'json';
    requestCast.send();
    requestCast.onload = function() {
        reparto = requestCast.response;
        cargarReparto();
    }

    function cargarReparto() {
        let arrayNombres = [];
        for (let i = 0; i < 6; i++) {
            arrayNombres.push(reparto.cast[i].name);
        }

        let myReparto = document.getElementById("reparto");
        myReparto.textContent = arrayNombres.join(", ") + ".";

    }


}

function validator() {
    let comentario = $("#comentario").val();
    if (comentario == '') {
        console.log("Ingresar comentario");
    }
}


//tooltips para valoración con estrellas, importante
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function(tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})