/* global bootstrap: false */
(function() {
    'use strict'
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    tooltipTriggerList.forEach(function(tooltipTriggerEl) {
        new bootstrap.Tooltip(tooltipTriggerEl)
    })
})()
//obtener parametros (login.js)
let idUserDetected = getParameterByName('id');
console.log(idUserDetected);

var id = params.get('id');
console.log(id);