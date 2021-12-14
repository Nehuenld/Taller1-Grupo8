/* global bootstrap: false */
(function() {
    'use strict'
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    tooltipTriggerList.forEach(function(tooltipTriggerEl) {
        new bootstrap.Tooltip(tooltipTriggerEl)
    })
    
})()

function mostrarJson(){
    const sectionGrid = document.getElementById('verJson');
    const requestURL = 'https://api.themoviedb.org/4/list/7113794?language=es&api_key=dc3b22860cde29d18263951f0f48ee4a&page=1';
    const request = new XMLHttpRequest(); //instancian objeto 
    let jsonStr = '';
    request.open('GET', requestURL); // setean el método, la url de api
    request.responseType = 'json'; //definen el tipo de dato que les devuelve
    request.send(); //envían la solicitud
    request.onload = function() { //esperan la respuesta
        jsonStr = request.response;
        const newLocal = JSON.stringify(jsonStr)
        let jsonView = newLocal;
        console.log(jsonView);       
        
        //sectionGrid.innerHTML = jsonView;
            


    regeStr = '', // A EMPTY STRING TO EVENTUALLY HOLD THE FORMATTED STRINGIFIED OBJECT
        f = {
                brace: 0
            }; // AN OBJECT FOR TRACKING INCREMENTS/DECREMENTS,
            // IN PARTICULAR CURLY BRACES (OTHER PROPERTIES COULD BE ADDED)

    regeStr = jsonView.replace(/({|}[,]*|[^{}:]+:[^{}:,]*[,{]*)/g, function (m, p1) {
    var rtnFn = function() {
            return '<div style="text-indent: ' + (f['brace'] * 20) + 'px;">' + p1 + '</div>';
        },
        rtnStr = 0;
        if (p1.lastIndexOf('{') === (p1.length - 1)) {
            rtnStr = rtnFn();
            f['brace'] += 1;
        } else if (p1.indexOf('}') === 0) {
            f['brace'] -= 1;
            rtnStr = rtnFn();
        } else {
            rtnStr = rtnFn();
        }
        return rtnStr;
    });

    
        sectionGrid.style.color= "white";
        sectionGrid.style.backgroundColor = "black";
        sectionGrid.innerHTML += regeStr; // inserta el resultado en el HTML
    }
    
}
   


//obtener parametros (login.js)
let idUserDetected = getParameterByName('id');
console.log(idUserDetected);

var id = params.get('id');
console.log(id);

