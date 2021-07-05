let nombre;
let cont = 1;
let msg;
let comision = 0;
do {

    nombre = prompt("Ingrese el nombre del Vendedor " + cont);

    if (nombre != null) {
        do {
            msg = cont + ") Ventas de " + nombre;
            msg += "\n Valor del articulo vendido";
            venta = parseInt(prompt(msg));
            if (!isNaN(venta)) {
                if (venta < 100000) {
                    comision += venta * 0.025;
                } else {
                    comision += venta * 0.75;
                }
            }
        } while (!isNaN(venta));


        alert("Vendedor #" + cont + "\n" + nombre + " su comision es de " + comision);
        cont++;

        // Dar formato de Moneda
        // const options = { style: 'currency', currency: 'COP' };
        // const numberFormat= new Intl.NumberFormat('es-US', options);
        // alert("Vendedor #" + cont + "\n" + nombre + " su comision es de " + numberFormat.format(comision));
    }
} while (nombre != null);