//let parrafo = document.querySelector('p');
//parrafo.innerHTML = 'Indica un numero del 1 al 10';

let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = []; 
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento); //Escojo un objeto HTML, en este caso es el titulo h1
    elementoHTML.innerHTML = texto;
    return;
}

//Llamamos a la funcion "intentoDeUsuario" definida en el boton "intento"
function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p', `Acertaste el numero en ${intentos} ${(intentos === 1 ) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p', 'Numero secreto es menor');
        } else {
            asignarTextoElemento('p', 'Numero secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }

    return;
}

// == igual en valor 
// === igual en valor y en tipo de dato

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
    
    //let valorCaja = document.querySelector('#valorUsuario')
    //valorCaja.value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    //Si ya sorteamos todos los numeros
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p', 'Ya se sortearon todos los numeros');
    } else {
        //Si el numero generado esta en la lista
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto(); //Aplicamos la recursividad: una funcion dentro de una funcion
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales(){
    asignarTextoElemento('h1', 'Juego del numero secreto');
    asignarTextoElemento('p', `Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego(){
    //Limpiar la caja
    limpiarCaja();
    
    //Indicar mensaje de intervalo de numeros
    //Generar el numero aleatorio
    //Inicializar el numero de intentos
    condicionesIniciales();

    //Deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

condicionesIniciales();




// *** Desafios *** //
/*
function mostrarHola1(){
    console.log('Hola');
}

function mostrarHola2(nombre){
    console.log('Hola ' + nombre);
}

function dobleNumero(numero){
    console.log(2*numero);
}

function promedio(num1, num2, num3){
    console.log((num1+num2+num3)/3);
}

function mayor(num1, num2) {
    if(num1 > num2){
        console.log('Numero 1 es mayor que numero 2');
    } else {
        console.log('Numero 2 es mayor que numero 1');
    }
}

function numero(numero){
    console.log(numero*numero);
}

mostrarHola1();
mostrarHola2('David');
dobleNumero(10);
promedio(10, 7, 9);
mayor(9, 8);
numero(7);
*/