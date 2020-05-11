var 
    num='',
    resultado=0,
    variables='';

    function boton(valor){
        num = document.calcu.respuesta.value;
        document.calcu.respuesta.value=num+valor;
        variables = document.calcu.respuesta.value;
        resultado = num;
        
    }
    
    function calcular(){
        resultado=eval(variables);
        imprimeResultado.value = resultado;
        document.calcu.respuesta.value = '('+variables+')';

    }
    
    function reset(){
    //limpiar
    document.calcu.respuesta.value= '' ;
    num='';
    resultado=0;
    variables='';
}

