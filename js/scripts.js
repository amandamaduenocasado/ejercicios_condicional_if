function verificarEdad(name, age) {
  if (age >= 18) {
    console.log('Hola ' + name + ', eres mayor de edad.');
  } else {
    console.log('Hola ' + name + ', eres menor de edad.');
  }
}

verificarEdad('Juan', 20);
verificarEdad('Ana', 15);

function searchBiggest(numberA, numberB) {
  if (numberA > numberB) {
    console.log(numberA + ' es mayor que' + numberB);
  } else {
    console.log(numberB + ' es mayor que ' + numberA);
  }
}

searchBiggest(5, 9);
searchBiggest(6, 7);

function searchNumber(number) {
  if (number > 0) {
    console.log(number + ' es negativo ');
  } else if (number < 0) {
    console.log(number + ' es positivo ');
  } else if (number === 0) {
    console.log(number + ' es cero ');
  }
}

searchNumber(-3);
searchNumber(1);
searchNumber(3);


/* function searchMarks(markA, markB, markC) {
  if (markA + markB + markC / 3 < 5) {
    console.log(markA + markB + markC + ' suspenso ');
  } else if (markA + markB + markC / 3 >= 5 && markA + markB + markC / 3 <= 8) {
    console.log(markA + markB + markC + ' aprobado ');
  } else if (markA + markB + markC / 3 > 8) {
    console.log(markA + markB + markC + ' matricula de honor ');
  }
}

searchMarks(4, 3, 2);
searchMarks(6, 8, 8);
searchMarks(9, 9, 9); */

function searchMarks(markA, markB, markC) {
  const average = (markA + markB + markC) / 3;

  if (average < 5) {
    console.log(markA + markB + markC + ' suspenso ');
  } else if (average >= 5 && average <= 8) {
    console.log(markA + markB + markC + ' aprobado ');
  } else if (average > 8) {
    console.log(markA + markB + markC + ' matricula de honor ');
  }
}

searchMarks(4, 3, 2);
searchMarks(6, 8, 8);
searchMarks(9, 9, 9);

function searchBiggest(numberA, numberB, numberC) {
  if (numberA > numberB && numberA > numberC) {
    console.log(numberA + ' es el mayor de ellos');
  } else if (numberB > numberA && numberB > numberC) {
    console.log(numberB + ' es el mayor de ellos');
  } else if (numberC > numberA && numberC > numberB) {
    console.log(numberC + ' es el mayor de ellos');
  }
}

searchBiggest(2, 30, 1);

function checkDivision(number) {
  if (number % 3 === 0 && number % 5 === 0) {
    console.log('Es divisible por 3 y por 5');
  } else if (number % 3 === 0) {
    console.log('Es divisible por 3');
  } else if (number % 5 === 0) {
    console.log('Es divisible por 5');
  } else {
    console.log('No es divisible por 3 ni por 5');
  }
} 

checkDivision(350);

function checkNumber(number) {
  if (number % 2 === 0) {
    console.log(number +  ' es un número par');
  } else {
    console.log(number +  ' es un número impar');
  }
}

checkNumber(3);

function leapYear(year) {
  if (year % 4 === 0 || year % 400 === 0 && year % 100 !== 0) {
    console.log(year + ' es un año bisiesto');
  } else {
    console.log(year + ' no es un año bisiesto');
  }
}

leapYear (1997);

