//punto1:Ingresar dos numeros y devolver una resta y multiplicacion de los mismos al usuario
let numero1 = parseInt(prompt("ingrese 1° numero"));
let numero2 = parseInt(prompt("ingrese 2° numero"));

document.write ("la resta de los numeros ingresados es:", numero1 - numero2);
document.write (" <br> la multiplicacion de los numeros ingresados es:", numero1 * numero2 );

//punto2:
let NomYApell = prompt("ingrese su nombre y apellido");
console.log(NomYApell.includes('a'));
console.log(NomYApell.includes('m'));
//document.write(`su nombre y apellido incyen "a" y "m": ${NomYApell.includes('a', 'm')}`);


//punto3
let frase = 'Pablito-clavo-un-clavito';
document.write(`<br> la frase ${frase} <br> sin guiones quedaria:  ${texto.replaceAll('-' , " ")}`);