let nombre;
let codigo;
let venta;

nombre = prompt("Nombre del vendedor:");
codigo = prompt("Ingrese el codigo del producto \n (1), (2), (3)");
venta = parseInt(prompt("Total de venta"));

let comision = 0;

switch (codigo) {
    case "1":
        comision = venta * 0.05;
        break;
    case "2":
        comision = venta * 0.08;
        break;
    case "3":
        comision = venta * 0.03;
        break;
    default:
        alert("Ese codigo no existe");
}

alert(nombre + " su comision es de " + comision);