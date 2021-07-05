let sexo = prompt("Ingrese el sexo");
let edad = parseInt(prompt("ingrese la edad"));
let tiempo = parseInt(prompt("introduzca el tiempo de la maratón anterior"));


console.log("sexo:" + sexo);

if (sexo == "hombre") {
    if (edad < 40) {
        if (tiempo <= 150)
            alert("clasificas a la siguiente maratón");
    } else {
        if (tiempo <= 175)
            alert("clasificas a la siguiente maratón");
    }
} else if (sexo == "mujer") {
    if (tiempo <= 180)
        alert("clasificas a la siguiente maratón");
    else {
        alert("No clasificas a la siguiente maratón");
    }
} else {
    alert("Debes ingresar un sexo valido");
}
console.log("FIN");