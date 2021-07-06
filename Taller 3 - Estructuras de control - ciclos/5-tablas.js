let msg = "";
for (let i = 1; i <= 10; i++) {

    msg += "\nTabla del " + i;
    for (let j = 0; j <= 10; j++) {
        msg += "\n" + i + " x " + j + " = " + i * j;
    }
    msg += '\n';

}

console.log(msg);