/* OBTENER LOS DATOS DE LOS CLICK QUE HIZO EL USUARIO 
 RECOLECTAR LA INFORMACION DE QUE BOTONES TOCO
 LOS NUMEROS USO Y QUE OPERACION ELIGIÓ*/



/*IDENTIFICAR LOS BOTONES*/


/*TENER RUTAS DE ACCESO A CADA ELEMENTO
(EN ESPECIAL AL DISPLAY QUE VA A PONER EL RESULTADO)*/


 /*OPERAR Y PONER EL RESULTADO*/



/*DECLARAR LAS VARIABLES DE LOS BOTONES*/



//DECLARACION DE LOS BOTONES
const botonNumeros = document.getElementsByName('botonNumero');
const botonOperacion = document.getElementsByName('botonOperacion');
const botonIgual = document.getElementsByName('botonIgual');
const botonDelete = document.getElementsByName('botonDelete');
var result = document.getElementById('result');

//variables de operaciones
var opeActual = '0';
var opeAnterior = '';
var operacion = undefined;

actualizarDisplay();

// CLICS EN LOS BOTONES
botonNumeros.forEach(function(boton){
    boton.addEventListener('click', function(){
        agregarNumero(boton.value);
    })
})

botonOperacion.forEach(function(boton){
    boton.addEventListener('click', function(){
        selectOperacion(boton.value);
    })
})

botonIgual.forEach(function(boton){
    boton.addEventListener('click', function(){
        calcular();
        actualizarDisplay();
    })
})

botonDelete.forEach(function(boton){
    boton.addEventListener('click', function(){
        clear();
        actualizarDisplay();
    })
})

//funciones

function selectOperacion(op) { /*verifica que haya un valor antes de elegir la operacion*/
    if(opeActual === '') return; 
    if(opeAnterior !== '') {
        calcular();
    }
    operacion = op.toString();
    opeAnterior = opeActual;
    opeActual = '';
}

function calcular () {
    var calculo; /* creamos la variable calculo*/
    const anterior = parseFloat(opeAnterior); /*las variables que eran string se pasan a numero*/
    const actual = parseFloat(opeActual);
    if (isNaN(anterior) || isNaN(actual)) return;
    switch (operacion) { /*selecciona la operacion a realizar*/
        case '+':
            calculo = anterior + actual;    /*SUMA*/        
            break;    
        case '-':
            calculo = anterior - actual;    /*RESTA*/
            break;
        case '*':
            calculo = anterior * actual;    /*MULTIPLICACION*/
            break;
        case '/':
            calculo = anterior / actual;    /*DIVISION*/
            break; 
        default:
            return;
    }
    opeActual = calculo;
    operacion = undefined;
    opeAnterior = '';

}

function agregarNumero(num){ /*concatena los numeros en un string*/
    opeActual = opeActual.toString() + num.toString();
    actualizarDisplay();
}

function clear(){ /*limpia el display*/
    opeActual = '0';
    opeAnterior = '';
    operacion = undefined;
}

function actualizarDisplay() { /*actualiza el valor mostrado en el display*/
    result.innerHTML = opeActual;
}
