function view(){
    let nombre = document.getElementById("nombre");
    let email=  document.getElementById("email"); 
    let telefono = document.getElementById("Telefono");
    let sexo = document.getElementById("Sexo");
    let comentario = document.getElementById("comentario");

    
    let textoElemento = document.getElementById('textArea3');
    textoElemento.innerHTML=nombre.value+"<br/>"+email.value+"<br/>"+telefono.value+"<br/>"+sexo.options[sexo.selectedIndex].text+"<br/>"+comentario.value;

   
    var myModal = new bootstrap.Modal(document.getElementById('modal_3'), {
        keyboard: false
      })
    myModal.show();
}

function mostrarDatos(){
    let nombre = document.getElementById("nombre");
    let email=  document.getElementById("email"); 
    let telefono = document.getElementById("Telefono");
    let sexo = document.getElementById("Sexo");
    let comentario = document.getElementById("comentario");
    let estado=true;


    if(nombre.value ==''){
        modalMostrar("Falta completar nombre y apellido!", "Debe completar nombre y apellido para continuar");
        estado = false;
    }else if(email.value==''){
        modalMostrar("Falta completar el email!", "Debe completar el email para continuar");
        estado = false;
    }else if(!Number.isInteger(parseInt(telefono.value))){
        modalMostrar("Falta completar el numero telefonico!", "Debe ingresar numero telefonico para continuar");
        estado = false;
    }else if(sexo.value!=1 && sexo.value!=2 && sexo.value!=3){
        modalMostrar("Falta elegir un sexo!", "Debe elegir una opcion para continuar");
        estado = false;
    }
    else if(comentario.value ==''){
        modalMostrar("Falta completar el comentario", "Debe completar el campo de comentario para continuar");
        estado = false;
    }
    if(estado==true){
        modalMostrarDatos("Atencion!","¿Estas seguro que desea enviar los datos?")
        
    }
 
    
}



function modalMostrar(titulo,descripcion){
    let tituloElemento = document.getElementById('modal_1Label');
    let textoElemento = document.getElementById('textArea_1');

    tituloElemento.innerHTML=titulo;
    textoElemento.innerHTML=descripcion;

    var myModal = new bootstrap.Modal(document.getElementById('modal_1'), {
        keyboard: false
      })
    myModal.show();
}

function modalMostrarDatos(titulo,descripcion){
    let tituloElemento = document.getElementById('modal_2Label');
    let textoElemento = document.getElementById('textArea2');

    tituloElemento.innerHTML=titulo;
    textoElemento.innerHTML=descripcion;

    var myModal = new bootstrap.Modal(document.getElementById('modal_2'), {
        keyboard: false
      })
    myModal.show();
}



function cerrar(){
        $("#exampleModal").modal('hide');//ocultamos el modal
        $('body').removeClass('modal-open');//eliminamos la clase del body para poder hacer scroll
        $('.modal-backdrop').remove();//eliminamos el backdrop del modal
      
}

function valideKey(evt){
			
    // code is the decimal ASCII representation of the pressed key.
    var code = (evt.which) ? evt.which : evt.keyCode;
    
    if(code==8) { // backspace.
      return true;
    } else if(code>=48 && code<=57) { // is a number.
      return true;
    } else{ // other keys.
      return false;
    }
}