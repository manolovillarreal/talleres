let x = parseInt(prompt("Ingrese un numero"));
let y = parseInt(prompt("Ingrese otro numero"));

let suma = x + y;
let resta = x - y;
let producto = x * y;
let division = x / y;
let potenciaX = x * x;
let potenciaY = y * y;

let msg = "";

msg += x + " + " + y + " = " + (x + y) + "\n";
msg += x + " - " + y + " = " + (x - y) + "\n";
msg += x + " x " + y + " = " + x * y + "\n";
msg += x + " / " + y + " = " + x / y + "\n";
msg += x + "^2" + " = " + x * x + "\n";
msg += y + "^2" + " = " + y * y + "\n";

alert(msg);
console.log(msg);