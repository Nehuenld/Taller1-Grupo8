/* global bootstrap: false */
(function() {
    'use strict'
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    tooltipTriggerList.forEach(function(tooltipTriggerEl) {
        new bootstrap.Tooltip(tooltipTriggerEl)
    })
})()


const sectionGrid = document.getElementById('verJson');
const requestURL = 'https://api.themoviedb.org/4/list/7113794?language=es&api_key=dc3b22860cde29d18263951f0f48ee4a&page=1';
const request = new XMLHttpRequest(); //instancian objeto 
var jsonStr = '';
request.open('GET', requestURL); // setean el método, la url de api
request.responseType = 'json'; //definen el tipo de dato que les devuelve
request.send(); //envían la solicitud
request.onload = function() { //esperan la respuesta
    jsonStr = JSON.stringify( request.response);
           
    console.log(jsonStr);
          
}

       
sectionGrid.innerHTML = jsonStr;

        /*
        let contCard = document.createElement('div');
        contCard.className = 'row';
       
        function mostrarMovies() {
            let pelicula = movies.results;
            for (i = 0; i < pelicula.length && i < 6; i++) {
                let cardDiv = document.createElement('div');
               cardDiv.className = "col-lg-4 col-md-8";
                let image = 'https://image.tmdb.org/t/p/w500/' + pelicula[i].poster_path;
                let title = pelicula[i].original_title;
                

                cardDiv.innerHTML = `<a href="PaginaProductoIndividual.html?id=${i}" target="_blank">
                                        <img class="imagen" src="${image}" alt="">
                                        <div class="img-overlay img-overlay-blur">
                                            <div  class="img-title">${title}</div>
                                        <p class="img-subtitle">Reservar</p>
                                        </div>
                                    </a>`;
              
                contCard.appendChild(cardDiv);
                //sectionGrid.appendChild(contCard);

            }

        }*/

//obtener parametros (login.js)
let idUserDetected = getParameterByName('id');
console.log(idUserDetected);

var id = params.get('id');
console.log(id);

