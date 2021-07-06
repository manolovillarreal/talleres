let sumatoria = 0;
let cont = 0;

for (let i = 2; i < 30; i++) {
    console.log(i);
    sumatoria += i;
    cont++;
}

let cuadrado = Math.pow(sumatoria, 2);
let cubo = Math.pow(sumatoria, 3);
let promedio = sumatoria / cont;

let msg = "Cálculos de la sumatoria de los numeros pares entre el 1 y el 29";

msg += "\n sumatoria = " + sumatoria;
msg += "\n cuadrado = " + cuadrado;
msg += "\n cubo = " + cubo;
msg += "\n promedio = " + promedio;