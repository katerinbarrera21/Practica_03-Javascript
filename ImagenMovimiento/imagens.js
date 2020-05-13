
    var imgArray = new Array();
    
    imgArray[0] = new Image();
    imgArray[0].src = 'images/1.png';
    
    imgArray[1] = new Image();
    imgArray[1].src = 'images/2.png';
    
    imgArray[2] = new Image();
    imgArray[2].src = 'images/3.png';
    
    imgArray[3] = new Image();
    imgArray[3].src = 'images/4.png';
    
    imgArray[4] = new Image();
    imgArray[4].src = 'images/5.png';
    
    imgArray[5] = new Image();
    imgArray[5].src = 'images/6.png';
    
    imgArray[6] = new Image();
    imgArray[6].src = 'images/7.png';
    
    imgArray[7] = new Image();
    imgArray[7].src = 'images/8.png';
    
    imgArray[8] = new Image();
    imgArray[8].src = 'images/9.png';
    
    imgArray[9] = new Image();
    imgArray[9].src = 'images/10.png';

    imgArray[10] = new Image();
    imgArray[10].src = 'images/11.png';
    




var num = 0 ;
var ver= 1;
var ini= 0;
var solonumAle= 0;
var imagenNumero=0;
var contNumeroAle=0;

////////////////////////////PARA MOSTRAR LA IMAGEN CUANDO ENVIEN LA POSICION EN EL ARRAY ///////////////////////

function mostrarImagen(indice){
    document.getElementById("imagen").src = imgArray[indice].src;
     console.log("mostrarImagen");
}


////////////////////////////////FUNCION DE NUMEROS RANDOMICOS //////////////
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

//AARAY QUE VA TENER LAS POSICIONES DE LAS IMAGENES 
var valorArray = new Array();

/////////////////////////////FUNCION DE INICIO, SE CREAN LAS POSICIONES ALETORIAS 
function  inicioF(e) {
    
    ini = 0;
    num =0;
    mostrarImagen(ini);
    document.getElementById('anterior').disabled = false;
    document.getElementById('siguiente').disabled = false;
    console.log('solo numero aletorio'+ solonumAle)

    cont=contNumeroAle;
    for (var i = 0; i < 5; i++) {
            valorArray[i]= getRandomInt(1,10);
            console.log('estos son los valores para las imagens' +valorArray[i]);

          } 
}
//// PARA VALIDAR LAS POSICIONES
var contV=0;
var seMovio=0;
//// METODO PARA EL BOTON SIGUIENTE EN LAS IMAGENES



function siguienteF (e)
{
    
        console.log("dentro del metodo nextIm")
        num++;
        imagenNumero =  getRandomInt(-1,10);
        if (num < 6) {
            console.log('entro primer if de siguiente');
            console.log("dentro del if")
            ver++;
            if (contV===0){
                mostrar = mostrarImagen(valorArray[0]);
                contV++;
                setInterval(moverIzquierda,100);
                setTimeout('',2000);
                resolucionPantalla2=0;
                posicion1=0;
               // document.getElementById('imagen').style.margin.left.disabled= true;
            }else if (contV===1){
                setInterval(moverIzquierda,100);
                setTimeout('',2000);
                    contV++;
                    mostrar = mostrarImagen(valorArray[1]);
                    resolucionPantalla2=0;
                    posicion1=0;
                    //document.getElementById('imagen').style.left.disabled = true;
            }else if (contV===2){
                setInterval(moverIzquierda,100);
                setTimeout('',2000);
            mostrar = mostrarImagen(valorArray[2]);
            contV++
                resolucionPantalla2=0;
                posicion1=0;
               // document.getElementById('imagen').style.left.disabled = true;
            }else if (contV===3){
                setInterval(moverIzquierda,100);
                setTimeout('',2000);
            mmostrar = mostrarImagen(valorArray[3]);
            contV++
            resolucionPantalla2=0;
                posicion1=0;
               // document.getElementById('imagen').style.left.disabled = true;
            }else if(contV===4){
                setInterval(moverIzquierda,100);
                setTimeout('',2000);
                mostrar = mostrarImagen(valorArray[4]);
            contV++
            resolucionPantalla2=0;
                posicion1=0;
               // document.getElementById('imagen').style.margin.left.disabled = true;
            } if  (contV>4){
            contV=0;
            resolucionPantalla2=0;
                posicion1=0;
               // document.getElementById('imagen').style.margin.left.disabled = true;
             }

       }
        if (ver > 0 && ver <5){
            document.getElementById('anterior').disabled = false;
            ver=1;
        }else {
            num=0;
            document.getElementById('siguiente').disabled = true;
            document.getElementById('s').innerHTML = '<br> No mas s ';
            }
        }

///////////////////FUNCION PARA EL BOTON ANTERIOR
 function anteriorF (e)
{
        console.log("dentro del metodo ANTERIOR F")
            num--;
            
            if (num >=0  ) {
                ver++;
                console.log('estoy en el primer if anterior')
            if (contV===0){
                setInterval(moverDerecha,100);
                setTimeout('',2000);
                resolucionPantalla2=0;
                posicion1=0;
               // document.getElementById('imagen').style.left.disabled = true;
                console.log(valorArray[4]);
                contV++;
            }else if (contV===1){
                setInterval(moverDerecha,100);
                setTimeout('',2000);
                resolucionPantalla2D=0;
                posicion1D=0;
               // document.getElementById('imagen').style.left.disabled = true;
                mostrar = mostrarImagen(valorArray[3]);
                contV++;
            }else if (contV===2){
                setInterval(moverDerecha,100);
                setTimeout('',2000);
                resolucionPantalla2D=0;
                posicion1D=0;
               // document.getElementById('imagen').style.left.disabled = true;
                mostrar = mostrarImagen(valorArray[2]);
                 contV++
            }else if (contV===3){
                setInterval(moverDerecha,100);
                setTimeout('',2000);
                resolucionPantalla2D=0;
                posicion1D=0;
                //document.getElementById('imagen').style.left.disabled = true;
                mostrar = mostrarImagen(valorArray[1]);
                contV++
            }else if(contV===4){
                setInterval(moverDerecha,100);
                setTimeout('',2000);
                resolucionPantalla2D=0;
                posicion1D=0;
                //document.getElementById('imagen').style.left.disabled = true;
                mostrar = mostrarImagen(valorArray[0]);
                contV++
            } if  (contV>4){
            contV=0;
            }
            if (ver > 0 && ver <5){
                document.getElementById('siguiente').disabled = false;
                ver =1;

            }else if (ver=0) {
                
                num=0;
                document.getElementById('anterior').disabled = true;
                document.getElementById('a').innerHTML = '<br> No mas  a';
            }
       }
}



////////////////////////////// METODO PARA EL tiempo 
//////////////////////////PARA LADO IZQUIERO
//////////////EMPEZAR TIEMPO
function startTimer () {
    timer.start();
    setTimeout(stopTimer,2000);
}
////////////////// PARAR TIEMPO
function stopTimer () {
    timer.stop();
    document.getElementById("imagen").style.left.disabled = true;
}

var resolucionPantalla= -1500;
var resolucionPantalla2= 0;
var posicion1=0;

function moverIzquierda(){
    
    if (resolucionPantalla2 > resolucionPantalla) {
        resolucionPantalla2 -=20; //desplazar fondo1 -10px
        posicion1=resolucionPantalla2+"px"; //preparar para código CSS fondo1= en el eje x e y asignando un valor en px
        document.getElementById("imagen").style.left= posicion1;
    }
     seMovio=1;
}

var temp2, temp1;

function temporizadorIzqDer(){
    temp2= setInterval(moverIzquierda,100);    
}

function clearTemp2(){
    clearInterval(temp2);   
}




var resolucionPantallaD= 1400;
var resolucionPantalla2D= 0;
var posicion1D=0;

function moverDerecha(){
    
    if (resolucionPantalla2D < resolucionPantallaD) {
        resolucionPantalla2D +=20; //desplazar fondo1 -10px
        posicion1D=resolucionPantalla2D+"px"; //preparar para código CSS fondo1= en el eje x e y asignando un valor en px
        document.getElementById("imagen").style.left= posicion1D;

    }
     seMovio=1;
}

var temp2D, temp1D;

function temporizadorIzqDer(){
    temp2D= setInterval(moverDerecha,100);    
}

function clearTemp2D(){
    clearInterval(temp2D);   
}

/////////////////////////////PARA EL LADO DERECHO

/*
window.onload=function(){document.onkeydown=desplazar};

function desplazar(objeto){
    var tecla = objeto.which;
   
        var situacionY = document.getElementById("caja").offsetLeft;
         var situacionX = document.getElementById("caja").offsetRight;
        switch (tecla){
            case 37 :   
                imagen.style.left = situacionY-0+"px" ; break;
            case 38 :
                imagen.style.right = situacionX-0+"px" ;break;
            case 39 : 
                imagen.style.left = situacionY-10+"px" ;break;
            case 40 :
                imagen.style.righ = situacionX-10+"px" ;break;
        }
    }





*/