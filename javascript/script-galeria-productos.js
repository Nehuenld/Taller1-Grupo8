const headerTitle = document.querySelector('header');
const section = document.querySelector('section');
const row = document.getElementById("gallery-row");

const requestURL = 'https://api.themoviedb.org/4/list/7113794?language=es&api_key=dc3b22860cde29d18263951f0f48ee4a&page=1';
const request = new XMLHttpRequest();
var movies = '';
//let listadoPelis = '';
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
    movies = request.response;
    //listadoPelis = movies.results;
    console.log(movies);
    //console.log(listadoPelis);
    crearImagenes();
}



function crearImagenes() {
    let listadoPeliculas = movies.results;

    for (let i = 0; i < listadoPeliculas.length; i++) {
        let myDivRow1 = document.createElement("div");
        myDivRow1.className = "col-lg-3 col-md-6 col-xs-2";

        let myLink = document.createElement("a");
        myLink.href = "PaginaProductoIndividual.html?id=" + i;
        myLink.target = "_blank";

        let myImg = document.createElement("img");
        myImg.src = 'https://image.tmdb.org/t/p/w500/' + listadoPeliculas[i].poster_path;

        let myDivOverlay = document.createElement("div");
        myDivOverlay.className = "img-overlay img-overlay-blur";

        let myDivImgTitle = document.createElement("div");
        myDivImgTitle.className = "img-title";
        myDivImgTitle.textContent = listadoPeliculas[i].title;

        let myDivImgSubtitle = document.createElement("div");
        myDivImgSubtitle.className = "img-subtitle";
        myDivImgSubtitle.textContent = "Reservar";

        row.appendChild(myDivRow1);
        myDivRow1.appendChild(myLink);
        myLink.appendChild(myImg);
        myLink.appendChild(myDivOverlay);
        myDivOverlay.appendChild(myDivImgTitle);
        myDivOverlay.appendChild(myDivImgSubtitle);

    }
}