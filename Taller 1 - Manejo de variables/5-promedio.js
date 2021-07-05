let nombre = prompt("Nombre del Estudiante");
let codigo = prompt("Codigo del Estudiante");

let nota1 = parseInt(prompt("Nota 1"));
let nota2 = parseInt(prompt("Nota 2"));
let nota3 = parseInt(prompt("Nota 3"));

let promedio = (nota1 + nota2 + nota3) / 3;
let msg = "Estudiante " + nombre;
msg += "\nCodigo: " + codigo + "\n";
msg += "\nNota 1: " + nota1;
msg += "\nNota 2: " + nota2;
msg += "\nNota 3: " + nota3;

msg += "\n\nPromedio: " + promedio;

console.log(msg);
alert(msg);