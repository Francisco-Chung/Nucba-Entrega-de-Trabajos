console.log('Ejercicio 1');

function imprimirParImpar(number) {
    if (number % 2 === 0) {
        console.log(`El número ${number} es par`);
    } else {
        console.log(`El número ${number} es impar`);
    }
}

imprimirParImpar(6);

console.log('------------------------');




console.log('Ejercicio 2');

function numeroMayor(num1, num2) {
    if (num1 > num2) {
        console.log(`El número ${num1} es mayor que el número ${num2}`);
    } else if (num1 < num2) {
        console.log(`El número ${num1} es menor que el número ${num2}`);
    } else {
        console.log('Ambos números son iguales');
    }
}

numeroMayor(4, 2);

console.log('------------------------');




console.log('Ejercicio 3');

function multiplo5(num) {
    if (num % 5 === 0) {
        console.log(`El número ${num} es múltiplo de 5`);
    } else {
        console.log(`El número ${num} no es múltiplo de 5`);
    }
}

multiplo5(25);

console.log('------------------------');




console.log('Ejercicio 4');

function imprimirNumero(num) {
    for (let i = 0; i <= num; i++) {
        console.log(i);
    }
}

imprimirNumero(5);

console.log('------------------------');




console.log('Ejercicio 5');

function imprimirPalabra(palabra, num) {
    for (let i = 0; i < num; i++) {
        console.log(palabra);
    }
}

imprimirPalabra('hola', 5);

console.log('------------------------');




console.log('Ejercicio 6');

let array = ['Diego', 20, 'Marta'];

function imprimirArray() {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}

imprimirArray();

console.log('------------------------');




console.log('Ejercicio 7');

let arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function quitarElemento(arreglo) {
    arreglo = arreglo.filter((i) => i !== 6);
    for (let i = 0; i < arreglo.length; i++) {
        console.log(arreglo[i]);
    }
}

quitarElemento(arreglo);

console.log('------------------------');




console.log('Ejercicio 8');

let numberArray = [1, 2, 3];

function multiplicarArray(numberArray, num) {
    for (let i = 0; i < numberArray.length; i++) {
        console.log(numberArray[i] * num);
    }
}

multiplicarArray(numberArray, 2);