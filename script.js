let primerNumero
alert('Hola, a continuación se le pedirá un número para realizar unas operaciones ');
primerNumero = prompt("introduzca un numero");
let segundoNumero;
segundoNumero = prompt('introduzca un numero')
if (primerNumero > segundoNumero) {
    alert(primerNumero + ' es mayor que ' + segundoNumero)
} else if (primerNumero == segundoNumero) {
    alert(primerNumero + ' es igual que ' + segundoNumero)
} else {
    alert(primerNumero + ' es menor que ' + segundoNumero)
}
if (segundoNumero % 2 == 1) {
    alert(segundoNumero + ' es impar ')
} else {
    alert(segundoNumero + ' es par ')
}