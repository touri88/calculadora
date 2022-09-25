/* OBTENER LOS DATOS DE LOS CLICK QUE HIZO EL USUARIO 
 RECOLECTAR LA INFORMACION DE QUE BOTONES TOCO
 LOS NUMEROS USO Y QUE OPERACION ELIGIÓ*/


/*IDENTIFICAR LOS BOTONES*/


/*TENER RUTAS DE ACCESO A CADA ELEMENTO
(EN ESPECIAL AL DISPLAY QUE VA A PONER EL RESULTADO)*/


 /*OPERAR Y PONER EL RESULTADO*/



/*DECLARAR LAS VARIABLES DE LOS BOTONES*/



//rutas
const numero1 = parseInt(document.getElementById('1').value);
const numero2 = parseInt(document.getElementById('2').value);
const numero3 = parseInt(document.getElementById('3').value);
const numero4 = parseInt(document.getElementById('4').value);
const numero5 = parseInt(document.getElementById('5').value);
const numero6 = parseInt(document.getElementById('6').value);
const numero7 = parseInt(document.getElementById('7').value);
const numero8 = parseInt(document.getElementById('8').value);
const numero9 = parseInt(document.getElementById('9').value);
const numero0 = parseInt(document.getElementById('0').value);

const suma = document.getElementById('+').value;

const display = document.getElementById('result');


//declaracion 
const resultado = (op, num1, num3) => {
    if (op === "+") {
        return num1 + num3;
    }
}

//display
display.textContent = resultado (suma, numero1, numero3);

//console.log(resultado (suma, numero1, numero3));