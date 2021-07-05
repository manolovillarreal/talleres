//Compara 3 valores ingresados por el usuario 
//y determina cual es el mayor.
//No considera si son iguales
let A = parseInt(prompt("Ingrese el primer Valor"));
let B = parseInt(prompt("Ingrese el segundo Valor"));
let C = parseInt(prompt("Ingrese el tercer Valor"));

if (A < B && A < C) {
    document.write(A + "es el menor");
} else {

    if (B < C && B < C) {
        document.write(B + " es el menor");
    } else {
        document.write(C + " es el menor");
    }

}