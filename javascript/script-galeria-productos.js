const headerTitle = document.querySelector('header');
const section = document.querySelector('section');
const row = document.getElementById("gallery-row");

const requestURL = 'https://api.themoviedb.org/4/list/7113794?language=es&api_key=dc3b22860cde29d18263951f0f48ee4a&page=1';
const request = new XMLHttpRequest();
var movies = '';
let listadoPeliculas = ''
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
    movies = request.response;
    listadoPeliculas = movies.results;
    //listadoPelis = movies.results;
    console.log(movies);
    crearImagenes(listadoPeliculas);

}

//let listadoPeliculas = movies.results;

function crearImagenes(listadoPeliculas) {
    
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


function ordenAsc() {
    row.innerHTML = "";
    listadoPeliculas = movies.results;

    function compare(a, b) {
        if (a.title < b.title) {
            return -1;
        }
        if (a.title > b.title) {
            return 1;
        }
        return 0;
    }
    listadoPeliculas.sort(compare);
    crearImagenes(listadoPeliculas);

}

function ordenDesc() {
    row.innerHTML = "";
    listadoPeliculas = movies.results;

    function compare(a, b) {
        if (a.title < b.title) {
            return 1;
        }
        if (a.title > b.title) {
            return -1;
        }
        return 0;
    }
    listadoPeliculas.sort(compare);
    crearImagenes(listadoPeliculas);
}

function pelisAccion() {
    row.innerHTML = "";
    let peliculas = movies.results;
    let listadoPeliculas = [];

    for (let i = 0; i < peliculas.length; i++) {
        if (peliculas[i].genre_ids.includes(28)) {
            listadoPeliculas.push(peliculas[i]);
        }
    }
    crearImagenes(listadoPeliculas);
}

function pelisComedia() {
    row.innerHTML = "";
    let peliculas = movies.results;
    let listadoPeliculas = [];

    for (let i = 0; i < peliculas.length; i++) {
        if (peliculas[i].genre_ids.includes(35)) {
            listadoPeliculas.push(peliculas[i]);
        }
    }
    crearImagenes(listadoPeliculas);
    
}

function pelisCrimen() {
    row.innerHTML = "";
    let peliculas = movies.results;
    let listadoPeliculas = [];

    for (let i = 0; i < peliculas.length; i++) {
        if (peliculas[i].genre_ids.includes(80)) {
            listadoPeliculas.push(peliculas[i]);
        }
    }
    crearImagenes(listadoPeliculas);
}

function pelisDocumental() {
    row.innerHTML = "";
    let peliculas = movies.results;
    let listadoPeliculas = [];

    for (let i = 0; i < peliculas.length; i++) {
        if (peliculas[i].genre_ids.includes(99)) {
            listadoPeliculas.push(peliculas[i]);
        }
    }
    crearImagenes(listadoPeliculas);
}

function pelisDrama() {
    row.innerHTML = "";
    let peliculas = movies.results;
    let listadoPeliculas = [];

    for (let i = 0; i < peliculas.length; i++) {
        if (peliculas[i].genre_ids.includes(18)) {
            listadoPeliculas.push(peliculas[i]);
        }
    }
    crearImagenes(listadoPeliculas);
}

function pelisTerror() {
    row.innerHTML = "";
    let peliculas = movies.results;
    let listadoPeliculas = [];

    for (let i = 0; i < peliculas.length; i++) {
        if (peliculas[i].genre_ids.includes(27)) {
            listadoPeliculas.push(peliculas[i]);
        }
    }
    crearImagenes(listadoPeliculas);
}

function pelisSuspenso() {
    row.innerHTML = "";
    let peliculas = movies.results;
    let listadoPeliculas = [];

    for (let i = 0; i < peliculas.length; i++) {
        if (peliculas[i].genre_ids.includes(53)) {
            listadoPeliculas.push(peliculas[i]);
        }
    }
    crearImagenes(listadoPeliculas);
}

function idiomaIng() {
    row.innerHTML = "";
    let peliculas = movies.results;
    let listadoPeliculas = [];

    for (let i = 0; i < peliculas.length; i++) {
        if (peliculas[i].original_language == "en") {
            listadoPeliculas.push(peliculas[i]);
        }
    }
    crearImagenes(listadoPeliculas);

}

function idiomaOtros() {
    row.innerHTML = "";
    let peliculas = movies.results;
    let listadoPeliculas = [];

    for (let i = 0; i < peliculas.length; i++) {
        if (peliculas[i].original_language != "es" && peliculas[i].original_language != "en") {
            listadoPeliculas.push(peliculas[i]);
        }
    }
    crearImagenes(listadoPeliculas);
}

function destacados() {
    row.innerHTML = "";
    let peliculas = movies.results;
    let listadoPeliculas = [];

    for (let i = 0; i < 6; i++) {
        listadoPeliculas.push(peliculas[i]);
    }
    crearImagenes(listadoPeliculas);
}

function punt8() {
    row.innerHTML = "";
    let peliculas = movies.results;
    let listadoPeliculas = [];

    for (let i = 0; i < peliculas.length; i++) {
        if (peliculas[i].vote_average > 8) {
            listadoPeliculas.push(peliculas[i]);
        }
    }
    crearImagenes(listadoPeliculas);
}

function punt6() {
    row.innerHTML = "";
    let peliculas = movies.results;
    let listadoPeliculas = [];

    for (let i = 0; i < peliculas.length; i++) {
        if (peliculas[i].vote_average > 6) {
            listadoPeliculas.push(peliculas[i]);
        }
    }
    crearImagenes(listadoPeliculas);

}

function puntOtros() {
    row.innerHTML = "";
    let peliculas = movies.results;
    let listadoPeliculas = [];

    for (let i = 0; i < peliculas.length; i++) {
        if (peliculas[i].vote_average < 6) {
            listadoPeliculas.push(peliculas[i]);
        }
    }
    crearImagenes(listadoPeliculas);
}