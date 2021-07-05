let A = parseInt(prompt("Ingrese el primer Valor"));
let B = parseInt(prompt("Ingrese el segundo Valor"));
let C = parseInt(prompt("Ingrese el tercer Valor"));


let suma = A + B + C;
let cuadradoSuma = suma * suma;
let producto = A * B * C;
let cuboProducto = producto * producto * producto;
let diferencia = cuboProducto - cuadradoSuma;

let msg = "A = " + A + "  B = " + B + "  C = " + C + '\n';

msg += "\nCuadrado de suma: " + "(" + A + "+" + B + "+" + C + ")^2 = " + cuadradoSuma;
msg += "\nProducto: " + A + " x " + B + " x " + C + " = " + producto;
msg += "\nCubo del producto: " + "(" + producto + ")^3 = " + cuboProducto;
msg += "\nDiferencia: " + cuboProducto + " - " + cuadradoSuma + " = " + diferencia;

console.log(msg);
alert(msg);