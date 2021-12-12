const section = document.getElementById('grid-movies1');
        const requestURL = 'https://api.themoviedb.org/4/list/7113794?language=es&api_key=dc3b22860cde29d18263951f0f48ee4a&page=1';
        const request = new XMLHttpRequest(); //instancian objeto 
        var movies = '';
        request.open('GET', requestURL); // setean el método, la url de api
        request.responseType = 'json'; //definen el tipo de dato que les devuelve
        request.send(); //envían la solicitud
        request.onload = function() { //esperan la respuesta
            movies = request.response; //reciben la respuesta
            console.log(movies);
            //rellenarHeader();
            mostrarMovies();
        }

        /*function rellenarHeader() {
            let titulo = document.getElementByClass("img-title");
            titulo.innerHTML = movies.original_title;
            let subtitulo = document.getElementById("subtitulo");
            subtitulo.innerHTML = "Hometown:" + movies.homeTown + " // Formed: " + movies.formed;

        }*/

        function mostrarMovies() {
            let pelicula = movies.results;
            for (i = 0; i < pelicula.length; i++) {
                let contCard = $('#grid-movies').addClass('row');
                let image = 'https://image.tmdb.org/t/p/w500/' + pelicula[i].poster_path;
                let title = pelicula[i].original_title;
               

                //title.textContent = pelicula[i].original_title;
                //myp.textContent = 'Identidad Secreta: ' + pelicula[i].overview;
                //myp1.textContent = 'Edad: ' + pelicula[i].release_date;
                //myp2.textContent = 'Super Poder: ';
                //image.src = 'https://image.tmdb.org/t/p/w500/' + pelicula[i].poster_path;
                let card = ` <div class="col-lg-3 col-md-6"><a href="PaginaProductoIndividual.html" target="_blank">
                        <img class="imagen" src="${image}" alt="">
                        <div class="img-overlay img-overlay-blur">
                            <div id="Candyman" class="img-title">${title}</div>
                            <p class="img-subtitle">Reservar</p>
                        </div>
                        </a></div>`;
               
                contCard.innerHTML = card;
                section.innerHTML = contCard;



            }

        }