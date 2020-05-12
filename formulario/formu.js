function validarCamposObligatorios()
{
    var bandera = true
    for(var i = 0; i < document.forms[0].elements.length; i++)
    {
        var elemento = document.forms[0].elements[i];

        if(elemento.value == '' && ( elemento.type == 'text' || elemento.type == 'email'  || elemento.type == 'password'))
        {
            if(elemento.id == 'cedula')
            {
                 document.getElementById('mensajeCedula').innerHTML = '<br> La cedula esta vacia'; 
            }

            if(elemento.id == 'nombres')
            {
                 document.getElementById('mensajeNombre').innerHTML = '<br> El nombre esta vacio'; 
            }

            if(elemento.id == 'apellidos')
            {
                 document.getElementById('mensajeApellido').innerHTML = '<br> El apellido esta vacio'; 
            } 

            if(elemento.id == 'direccion')
            {
                 document.getElementById('mensajeDireccion').innerHTML = '<br> La direccion esta vacia'; 
            }

            if(elemento.id == 'telefono')
            {
                 document.getElementById('mensajeTelefono').innerHTML = '<br> El telefono esta vacio'; 
            }

            if(elemento.id == 'fecha')
            {
                 document.getElementById('mensajeFecha').innerHTML = '<br> La fecha esta vacia'; 
            }

            if(elemento.id == 'correo')
            {
                 document.getElementById('mensajeCorreo').innerHTML = '<br> El correo esta vacio'; 
            }

            if(elemento.id == 'contrasenia')
            {
                 document.getElementById('mensajeContrasenia').innerHTML = '<br> La contrasenia esta vacia'; 
            }

            error= comentarioError(elemento);
            bandera = false;
        }
    }

    if(!bandera)
    {
        alert('Error: revisar los comentarios');
    }
    return bandera;
}


function validarCedula (cedula) 
{
    if(cedula.value.length > 0)
    {
        var cedulaAscii = cedula.value.charCodeAt(cedula.value.length-1);
        console.log(cedulaAscii);

        if(cedulaAscii >= 48 && cedulaAscii <= 57) 
        {
             return true;
        }else {
            cedula.value = cedula.value.substring(0, cedula.value.length-1)
            return false;
            }
    }else {
        return true
        }

}

function validarNumCedula(numero){

    var cedula = numero.value.trim();
    console.log(cedula);

    if(cedula.length == 10){
        
        var digito_region = cedula.substring(0,2);
        if( digito_region >= 1 && digito_region <=24 )
        {
          var ultimo_digito   = cedula.substring(9,10);
          var pares = parseInt(cedula.substring(1,2)) + parseInt(cedula.substring(3,4)) + parseInt(cedula.substring(5,6)) + parseInt(cedula.substring(7,8));

          var numero1 = cedula.substring(0,1);
          var numero1 = (numero1 * 2);
          if( numero1 > 9 ){ 
              var numero1 = (numero1 - 9); 
            }

          var numero3 = cedula.substring(2,3);
          var numero3 = (numero3 * 2);
          if( numero3 > 9 ){ 
              var numero3 = (numero3 - 9); 
            }

          var numero5 = cedula.substring(4,5);
          var numero5 = (numero5 * 2);
          if( numero5 > 9 ){
               var numero5 = (numero5 - 9); 
            }

          var numero7 = cedula.substring(6,7);
          var numero7 = (numero7 * 2);
          if( numero7 > 9 ){ 
              var numero7 = (numero7 - 9);
             }

          var numero9 = cedula.substring(8,9);
          var numero9 = (numero9 * 2);
          if( numero9 > 9 ){
               var numero9 = (numero9 - 9); 
            }

          var impares = numero1 + numero3 + numero5 + numero7 + numero9;
          var suma_total = (pares + impares);
          var primer_digito_suma = String(suma_total).substring(0,1);
          var decena = (parseInt(primer_digito_suma) + 1)  * 10;
          var digito_validador = decena - suma_total;
          if(digito_validador == 10){
            var digito_validador = 0;
          }

          digito_tercero = numero.value.charCodeAt(2);
          console.log(digito_tercero);

          if ((digito_validador == ultimo_digito)&& (digito_tercero < 6 >=0) ) {
            
              console.log('la cedula:' + cedula + ' es correcta');
              numero.style.border = 'none';
              numero.style.color = 'black';
              document.getElementById('mensajeCedula').innerHTML = '<br> Cedula Valida ';
              return true;
            

          }else{
            error= comentarioError(numero);
            console.log('la cedula:' + cedula + 'es incorrecta');
            document.getElementById('mensajeCedula').innerHTML = '<br> Cedula no valida ';
          }
          
        }else{
          numero.value= "";
          error= comentarioError(numero);
          console.log('Esta cedula no pertenece a ninguna region');
          document.getElementById('mensajeCedula').innerHTML = '<br> Cedula no pertenece a ninguna region ';

        }
     }else{
        numero.value= "";
         error= comentarioError(numero);
        console.log('Esta cedula tiene menos de 10 Digitos');
        document.getElementById('mensajeCedula').innerHTML = '<br> Cedula no  tiene 10 digitos ';
     }    
  
}




//PARA VALIDAR QUE SOLO INGRESE LETRAS //////////////////////////////////////////////////////////////
function validarLetras(elemento)
{
    if(elemento.value.length > 0)
    {
        var miAscii = elemento.value.charCodeAt(elemento.value.length-1);
        console.log(miAscii);

        if((miAscii >= 97 && miAscii <= 122) ||  (miAscii === 32) || (miAscii >= 65 && miAscii <= 90)) 
        {
           return true;
        }else {
            elemento.value = elemento.value.substring(0, elemento.value.length-1)
            return false;
            }
    }else {
        return true
        }

}


// PARA LOS NOMBRES Y APELLIDOS QUE SEAN SOLO DOS////////////////////////////////////////////

function dosNombres (elemento, id){
    var cadena = elemento.value.trim();
    var separar=cadena.split(" ");

    if (separar.length === 2){
        console.log(separar);
        elemento.style.border = 'none';
        elemento.style.color = 'black';

        if (id === 'mensajeNombre'){
            document.getElementById('mensajeNombre').innerHTML = '<br> Nombres aceptados ';
            correcto = comentarioCorrecto(elemento);
        }

        if (id === 'mensajeApellido' ) {
            document.getElementById('mensajeApellido').innerHTML = '<br> Apellidos aceptados';
            correcto = comentarioCorrecto(elemento);          
        }

        return true;
    } else {
        if (id === 'mensajeNombre'){
          document.getElementById('mensajeNombre').innerHTML = '<br> Ingresar Solo dos valores'; 
          error= comentarioError(elemento);
        }
    
        if (id === 'mensajeApellido' ) {
          document.getElementById('mensajeApellido').innerHTML = '<br> Ingresar Solo dos valores'; 
          error= comentarioError(elemento);         
         }

        elemento.value= "";
        return false;
    }

}

////////////////////// PARA TELEFONO ///////////////////////////////////




function validarNumero(elemento)
{
    if(elemento.value.length > 0)
    {
      var miAscii = elemento.value.charCodeAt(elemento.value.length-1);
      console.log(miAscii);
      if(miAscii >= 48 && miAscii <= 57) 
        {
          console.log ('acepto valor');
          return true;
        }else {
            elemento.value = elemento.value.substring(0, elemento.value.length-1)
            console.log ('no acepto valido');
            return false;
            }
    }else {
        return true
        }
}



function verificarTelefono (celu) {

  if (celu.value.length === 10 ){
    document.getElementById('mensajeTelefono').innerHTML = '<br> Telefono aceptado';
    correcto = comentarioCorrecto(celu);
    console.log ('num valido');
    return true;
  }else 
  {
        celu.value= "";
        document.getElementById('mensajeTelefono').innerHTML = '<br> Ingresar 10 numeros'; 
        error= comentarioError(celu);
        console.log ('no num valido')
        return false;
        
  }
}

/////////////////////////////PARA LA FECHA ///////////////////////////

function obtenerFecha(e)
{ 
  var fecha1 = document.getElementById('dia').value
          + "/"+ document.getElementById('mes').value
          + "/"  + document.getElementById('anio').value;

       var anio = document.getElementById('anio').value;

          if(anio >= 1900 && anio <= 2020){
            console.log (fecha1);
            document.getElementById ('fecha').value= fecha1;
            document.getElementById('mensajeFecha').innerHTML = '<br> Fecha aceptada';
            console.log ('fecha aceptada');
            correcto = comentarioCorrecto(e);
            return true;

          }else if (anio <1990){
            document.getElementById('mensajeFecha').innerHTML = '<br>Anio mayor 1990 y menor 2020. Fecha no valida';
            error= comentarioError(e);
            return false; 
          }  
}


////////////////////////////////////PARA VER DIA //////////////////////
function validarDia (d) {
  
  var DiaAscii = d.value.charCodeAt(d.value.length-1);
  console.log(DiaAscii); 
    if(DiaAscii >= 48 && DiaAscii <= 57) {
        var dia = d.value;
        if(dia > 0 && dia <= 31){
          console.log('dia valido');
          return true;
        }else {
            d.value= "";
            return false;
        }
      }else {
        d.value= ""
        return false;
      }
}

//////////////////////////////////////PARA VER MES ////////////////////////////
function validarMes (mes) {
  var mesAscii = mes.value.charCodeAt(mes.value.length-1);
  console.log(mesAscii);
    if(mesAscii >= 48 && mesAscii <= 57){
        var meses = mes.value;
        if(meses > 0 && meses <= 12){
          console.log('mes valido');
          return true;
        }else {
            mes.value= "";
        }
      }else {
        mes.value= ""
        return false;
      }
}

/////////////////////////////////////PARA VER ANIO////////////////////////////

function validarAnio (a) {
  
  var aAscii = a.value.charCodeAt(a.value.length-1);
  console.log(aAscii);
    if(aAscii >= 48 && aAscii <= 57) {
      console.log('anio valido');
          return true;
      }else {
        a.value= ""
        return false;
      }
}


///////////////////////////////////////////////////VALIDAR CORREO///////////////////////////////////////

function validarCorreo(elemento) {
  
  elemento.value = elemento.value.trim();
  var cadenaC = elemento.value.trim() + " ";
  var correoAscii;

  if(elemento.value.length > 0){
      for (var i = 0; i < elemento.value.length; i++) {
          correoAscii = elemento.value.charCodeAt(i);
          if((correoAscii >= 48 && correoAscii <= 57) || (correoAscii >= 97 && correoAscii <= 122) || (correoAscii >= 64 && correoAscii <= 90)||(correoAscii ===46)){
             console.log('dentro de la validacion ascci');
          }else {
             var noCaracter= C.substring(0, i) + cadenaC.substring(i+1, elemento.value.length);
              elemento.value = noCaracter; 
              console.log('correo' + noCaracter);
              return false;
          }
      }
  }else{
      return true;
  }
} 


/////////////////////////////VALIDAR CORREO (VERFICAR CORREO )//////////////////////////////////////

function verificarCorreo(elemento) {
  var dominio1 = 'ups.edu.ec';
  var dominio2= 'est.ups.edu.ec';
  var correoLadoDerecho = '';
  //var correoLadoIzquierdo= '';

  var posicionArroba = elemento.value.indexOf('@', );
  var tamanioCorreo = elemento.value.substring(0, posicionArroba);



  if((posicionArroba != -1) && (tamanioCorreo.length >2)){
      correoLadoDerecho = elemento.value.substring(posicionArroba + 1, elemento.value.length);
      console.log("correo "+correoLadoDerecho);
 
      if ((dominio1 == correoLadoDerecho)||(dominio2 == correoLadoDerecho) ){
        console.log("Correo Valido");
        document.getElementById('mensajeCorreo').innerHTML = '<br> Correo Aceptado'; 
        correcto = comentarioCorrecto(elemento);
        return true;

      }else{
        elemento.value= "";
        document.getElementById('mensajeCorreo').innerHTML = '<br>' + 'Dominio [' + dominio1 + ']  o [ ' + dominio2 + '] '; 
        error= comentarioError(elemento);
        console.log ('Dominio no correcto')
        return false;
      }
  }else{
      if(posicionArroba === -1){
        elemento.value= "";
        document.getElementById('mensajeCorreo').innerHTML = '<br> Ingresar @';
        error= comentarioError (elemento);
        return false;
      }else{
        elemento.value= "";
        document.getElementById('mensajeCorreo').innerHTML = '<br> Valido desde tres digitos'; 
        error= comentarioError(elemento);
        console.log ('menos de 3')
        return false;
      }
  }
} 




//////////////////////////CONTRASENA//////////////////////////////////////

function  comentarioError (elemento) {
  elemento.style.border = '2px red solid';
  elemento.className = 'error';
}

function  comentarioCorrecto(elemento) {
  elemento.style.border = 'none';
  elemento.style.color = 'black'
  elemento.className = 'error';
}

function validarContrasenia(elemento) {
  var contrAscii = '';
  cadena = elemento.value.trim();

  if(elemento.value.length > 0){
      for (var i = 0; i < elemento.value.length; i++) {
          contrAscii = elemento.value.charCodeAt(i);
          if((contrAscii >= 64 && contrAscii <= 90) ||
              (contrAscii >= 97 && contrAscii <= 122) ||
              (contrAscii === 95) ||
               (contrAscii === 36)
          )
          {
                  console.log (elemento.value);
                  return true;
          }else { 

            var noCaracter= cadena.substring(0, i) + cadena.substring(i+1, elemento.value.length);
            elemento.value = noCaracter; 
            document.getElementById('mensajeContrasenia').innerHTML = ' <br> Utilizar minusculas o mayucuslas y caracteres especiales(@, _ , $) '; 
            error= comentarioError(elemento);
            return false;
          }
      }
  }else{
      return true;
  }
} 


function verificarContrasenia(elemento) {

  var contM=0;
  var contm=0;
  var contc=0;
  var tamanioContrasenia =elemento.value.length;

  if(tamanioContrasenia > 8){
      for(var i=0; i<elemento.value.length; i++){
          caracter = elemento.value.charCodeAt(i);

          var mayuscula = existe(caracter, 64, 90);
          var  minuscula = existe(caracter, 97, 122);
          var caracter = caracterEspecial(caracter);
            if(mayuscula === true){ contM++;};
            if(minuscula === true){ contm++;};
            if(caracter === true){ contc++;};
      }

      if((contM > 0)&&(contm >0)&&(contc > 0) ){
          console.log("contrasenia correcta")
          document.getElementById('mensajeContrasenia').innerHTML = '<br> Contrasenia Aceptada'; 
          correcto = comentarioCorrecto(elemento);
          document.getElementById('contrasenia').disabled = true ;
          return true;

      }else{
          elemento.value = '';
          document.getElementById('mensajeContrasenia').innerHTML = " <br> La contrasenia debe tener al menos 1 miniscula, mayuscula y un caracter especial";
          error= comentarioError(elemento)
      }

  }else{
    elemento.value='';
    document.getElementById('mensajeContrasenia').innerHTML = ' <br> Contrasenia mayor a 8 caracteres'; 
    error= comentarioError(elemento);
  }
}



function existe(caracter, lim1, lim2){

  if (caracter >= lim1 && caracter <= lim2){
      console.log ('existe el caracter' + caracter)
      return true;
  }else{
      return false;
  }
}


function caracterEspecial(caracter){
  if (caracter === 64 || caracter === 36 || caracter === 95){
      console.log('existe caracter Especial' + caracter)
    return true;
  }else{
      return false;
  }
}

