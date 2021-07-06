let sumatoria = 0;

for (let i = 0; i <= 100; i++) {
    sumatoria += i;
}

msg += "La sumatoria de los 100 primeros números naturales es " + sumatoria;

console.log(msg);
document.write(msg);
alert(msg);