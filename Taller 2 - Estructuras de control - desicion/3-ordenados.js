let A = parseInt(prompt("Ingrese el primer Valor"));
let B = parseInt(prompt("Ingrese el segundo Valor"));
let C = parseInt(prompt("Ingrese el tercer Valor"));

msg = "";
if (A < B && B < C) {
    msg = "Los valores se ingresaron de manera ascendente: " + A + "," + B + "," + C;
} else if (A > B && B > C) {
    msg = "Los valores se ingresaron de manera descendente: " + A + "," + B + "," + C;
} else {
    msg = "Los valores se ingresaron en desorden: " + A + "," + B + "," + C;
}

//Muestro el mensaje como yo prefiera o dependiendo de la situación
console.log(msg);
document.write(msg);
alert(msg);