# Practica_03-Javascript

PRÁCTICA DE LABORATORIO

CARRERA: Computación 

ASIGNATURA: Hipermedial

NRO. PRÁCTICA: 3 

TÍTULO PRÁCTICA: Resolución de problemas sobre JavaScript

OBJETIVO ALCANZADO:

Entender y organizar de una mejor manera los sitios de web en Internet

Diseñar adecuadamente elementos gráficos en sitios web en Internet.

Crear sitios web aplicando estándares actuales.

ACTIVIDADES DESARROLLADAS

Diseñar una interfaz en HTML que permita ingresar los siguientes campos en un formulario: cedula, nombres, apellidos,
dirección, teléfono, fecha de nacimiento, correo electrónico y contraseña. Luego, usando funciones de JavaScript se
pide validar que todos los campos han sido ingresados, además; que los valores ingresados en cada campo del
formulario sean correctos teniendo en cuenta las siguientes condiciones:
Verificación de parámetros en el formulario:
a. Se debe validar qué, en el campo de la cedula, se ingrese sólo números y que la misma sea correcta, en base, al último
dígito verificador.


Parte del código:

function validarCedula ( cedula ) {

if(cedula.value.length > 0 )


{

var cedulaAscii = cedula.value.charCodeAt(cedula.value.length- 1 );

console.log(cedulaAscii);

if(cedulaAscii >= 48 && cedulaAscii <= 57 )

{

return true;

}else {

cedula.value = cedula.value.substring( 0 , cedula.value.length- 1 )

return false;

}

}else {

return true

}
}
function validarNumCedula( numero ){

var cedula = numero.value.trim();

console.log(cedula);

if(cedula.length == 10 ){

var digito_region = cedula.substring( 0 , 2 );

if( digito_region >= 1 && digito_region <= 24 )

{

var ultimo_digito = cedula.substring( 9 , 10 );

var pares = parseInt(cedula.substring( 1 , 2 )) +

parseInt(cedula.substring( 3 , 4 )) +
parseInt(cedula.substring( 5 , 6 )) +
parseInt(cedula.substring( 7 , 8 ));

b. Se debe validar qué, en el campo del nombre, ingrese exclusivamente dos nombre y que permita ingresar sólo letras,
por ejemplo: “Gabriel Alejandro”, es válido; “Gabriel”, no es válido.


Al momento de ingresar los nombres, se valida que existan dos, y en caso de que haya mas de dos nombres o si solo
existe uno, el formulario no dejara ingresar este valor.

if (separar.length === 2 ){

console.log(separar);

elemento.style.border = 'none' ;

elemento.style.color = 'black' ;

if (id === 'mensajeNombre' ){

document.getElementById( 'mensajeNombre' ).innerHTML =
'
Nombres aceptados ' ;

correcto = comentarioCorrecto(elemento);
}

c. Se debe validar qué, en el campo del apellidos, ingrese exclusivamente dos apellidos y que permita ingresar sólo letras,
por ejemplo: “León Paredes”, es válido; “León”, no es válido.

Al igual que el anterior se validó, que existan solo dos apellidos y sea solo letras. En caso de que haya ingresado mas
de dos apellidos el formulario lo tomara como datos no válidos.

if (separar.length === 2 ){

console.log(separar);

elemento.style.border = 'none' ;

elemento.style.color = 'black' ;

if (id === 'mensajeApellido' ) {

document.getElementById( 'mensajeApellido' ).innerHTML =
'
Apellidos aceptados' ;

correcto = comentarioCorrecto(elemento);
}

d. Se debe validar qué, en el campo del teléfono, permita ingresar sólo números y un máximo de 10 caracteres numéricos.


Para este requerimiento se realizo una función que solo permita números y otra función que solo acepte 10 numeros para el
teléfono. Luego muestra el error Ingresar solo 10 números

function validarNumero( elemento )

{
if(elemento.value.length > 0 )
{

var miAscii = elemento.value.charCodeAt(elemento.value.length- 1 );
console.log(miAscii);
if(miAscii >= 48 && miAscii <= 57 )
{

console.log ( 'acepto valor' );

return true;

}else {
elemento.value = elemento.value.substring( 0 , elemento.value.length- 1 )
console.log ( 'no acepto valido' );

return false;
}
}else {
return true
}
}

e. Se debe validar que la fecha de nacimiento ingrese en el formato dd/mm/yyyy.

Se crearon tres entradas nuevas de texto, la primera acepta números hasta el 30, el segundo solo acepta números
hasta el 12 y el tercero solo acepta números que sean mayores a 1990 y menores a 2020

function obtenerFecha( e )
{

var fecha1 = document.getElementById( 'dia' ).value

"/" + document.getElementById( 'mes' ).value
"/" + document.getElementById( 'anio' ).value;
var anio = document.getElementById( 'anio' ).value;

if(anio >= 1900 && anio <= 2020 ){

console.log (fecha1);
document.getElementById ( 'fecha' ).value= fecha1;
document.getElementById( 'mensajeFecha' ).innerHTML =
'
Fecha aceptada' ;
console.log ( 'fecha aceptada' );
correcto = comentarioCorrecto(e);
return true;

}else if (anio < 1990 ){

document.getElementById( 'mensajeFecha' ).innerHTML =
'
Anio mayor 1990 y menor 2020. Fecha no valida' ;
error= comentarioError(e);

return false;
}
}


Se crearon 2 funciones más, para la validación del día y el mes.

f. Se debe validar qué, en el campo correo electrónico, permita ingresar un correo válido. Se considera un correo válido,
cuando comienza por tres o más valores alfanuméricos, luego un @, seguido por la extensión “ups.edu.ec” o
“est.ups.edu.ec”.

Primero se toma en cuenca que

function validarCorreo( elemento ) {

elemento.value = elemento.value.trim();

var cadenaC = elemento.value.trim() + " " ;

var correoAscii;

if(elemento.value.length > 0 ){

for (var i = 0 ; i < elemento.value.length; i++) {

correoAscii = elemento.value.charCodeAt(i);
if((correoAscii >= 48 && correoAscii <= 57 )
|| (correoAscii >= 97 && correoAscii <= 122 )
|| (correoAscii >= 64 && correoAscii <= 90 )
||(correoAscii === 46 )){

console.log( 'dentro de la validacion ascci' );

}else {

var noCaracter= C.substring( 0 , i) +
cadenaC.substring(i+ 1 , elemento.value.length);
elemento.value = noCaracter;
console.log( 'correo' + noCaracter);
return false;

Se creo otra función para validar que se ingrese ups.edu.ec o est.ups.edu.ec después de @.

g. Se debe validar que la contraseña ingresada tenga mínimo 8 caracteres, además, debe incluir al menos: una letra
mayúscula, una letra minúscula y un carácter especial (@, , $)

Se valido que ingrese mas de 8 caracteres y solo pueda tener como carácter especial @..$ si la persona ingresa un
número, el formulario rechaza la contraseña o si ingresa menos de 8 caracteres.
Se crearon 3 funciones pequeñas para obtener los valores y una función para validar que la longitud sea correcta.

if(tamanioContrasenia > 8 ){

for(var i= 0 ; i<elemento.value.length; i++){

caracter = elemento.value.charCodeAt(i);
var mayuscula = existe(caracter, 64 , 90 );
var minuscula = existe(caracter, 97 , 122 );
var caracter = caracterEspecial(caracter);
if(mayuscula === true){ contM++;};
if(minuscula === true){ contm++;};
if(caracter === true){ contc++;};

}


Al presionar el botón aceptar, los campos son validos y nos muestra la pagina php

Diseñar una interfaz en html que tenga tres botones que diga “Anterior”, “Iniciar”, “Siguiente”, y una imagen. Luego,
desde javascript se debe controlar para al hacer clic sobre uno de los botones realice una acción relacionada a una
galería de imágenes.

a. Se debe tener, un arreglo con los nombres de diez imágenes, previamente descargadas y almacenadas en una
carpeta llamada “images”.

b. La galería de imágenes debe visualizar exclusivamente 5 imágenes.

c. Cada vez que se haga clic en el botón iniciar se deben escoger de manera aleatoria cinco imágenes de las diez
que se mostrarán en la galería de imágenes.

Esta función fue utilizada para guardar un nuevo array que guarda los números de las posiciones aleatorias para luego
buscar en el array que tiene las imágenes.

var valorArray = new Array();

/////////////////////////////FUNCION DE INICIO, SE CREAN LAS POSICIONES ALETORIAS

function inicioF( e ) {

ini = 0 ;
num = 0 ;
mostrarImagen(ini);
document.getElementById( 'anterior' ).disabled = false;
document.getElementById( 'siguiente' ).disabled = false;
console.log( 'solo numero aletorio' + solonumAle)
cont=contNumeroAle;

for (var i = 0 ; i < 5 ; i++) {

valorArray[i]= getRandomInt( 1 , 10 );

console.log( 'estos son los valores para las imagens' +valorArray[i]);
}
}
Se utilizo esta función para sacar las 5 variables aleatorias, devuelve el número de posición que trendra nuestro
arreglos de imágenes.

function getRandomInt( min , max ) {

return Math.floor(Math.random() * (max - min)) + min;
}

d. Al hacer clic en el botón siguiente o anterior se debe cambiar la imagen presentada en la galería.

La función siguiente, sirve para ubicar las posiciones aleatorias elegidas anteriormente. Y se envia esta posición
al array que tiene las imágenes y nos retorna la imagen en esa posición, cuando llega a 5 el botón cambia a un
estado disabled y viceversa con el botón anterior si llega a 0 se cambia a disabled.
function siguienteF ( e )

e. El cambio de imágenes debe simular un efecto, para lo cuál, se debe usar las propiedades left o rigth.

Con style.left cambiamos la posición de la etiqueta img con id imagen.

function moverIzquierda(){

if (tamanioI2 > tamanioI) {

tamanioI2 - = 20 ;

cambioI1=tamanioI2+ "px" ;

document.getElementById( "imagen" ).style.left= cambioI1;

}

seMovio= 1 ;

}


Lo llamamos con la siguiente línea de código. Set Interval y set time out son los funciones para manejar el tiempo
mientras vamos aumentando el la propiedad left


Realizar una calculara en HTML usando botones de javascript y una caja de texto para visualizar el resultado. Las
operaciones que podrá hacer la calculadora son: suma, resta, multiplicación y división. Además, se podrá limpiar la
memoria de la calculadora. Por último, se debe usar la función eval() para realizar las operaciones aritméticas

Se utilizo tres funciones, la primera función fue utiliza para leer el numero que ingresa en la calculadora, la segunda
utilizamos el método eval() y la última función la utilizo para limpiar la calculadora

function boton( valor ){

num = document.calcu.respuesta.value;

document.calcu.respuesta.value=num+valor;

variables = document.calcu.respuesta.value;

resultado = num;

}

function calcular(){

resultado=eval(variables);

imprimeResultado.value = resultado;

document.calcu.respuesta.value = '(' +variables+ ')' ;

}

function reset(){

//limpiar

document.calcu.respuesta.value= '' ;

num= '' ;

resultado= 0 ;

variables= '' ;

}

RESULTADO(S) OBTENIDO(S):
Formulario:
![](https://github.com/katerinbarrera21/Practica02-Mi-Sitio-Web-CSS-/blob/master/readme/4.JPG)

Imágenes:
![](https://github.com/katerinbarrera21/Practica02-Mi-Sitio-Web-CSS-/blob/master/Imagenes/readme/1.JPG)
![](https://github.com/katerinbarrera21/Practica02-Mi-Sitio-Web-CSS-/blob/master/Imagenes/readme/2.JPG)

Calculadora:
![](https://github.com/katerinbarrera21/Practica02-Mi-Sitio-Web-CSS-/blob/master/Imagenes/readme/3.JPG)


CONCLUSIONES:
Se logro entender y organizar de forma adecuada los sitios de web en Internet
Se logro realizar animaciones con las imágenes en sitios web, sin embargo se tuvo algunos problemas con esta parte.
RECOMENDACIONES:
N/A
Nombre de estudiante: ________KATHERINE BARRERA_____________________
