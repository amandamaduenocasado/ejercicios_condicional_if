/* function verificarEdad(name, age) {
  if (age >= 18) {
    console.log('Hola ' + name + ', eres mayor de edad.');
  } else {
    console.log('Hola ' + name + ', eres menor de edad.');
  }
} */

function verificarEdad(name, age) {
  if (age >= 18) {
    return 'Hola ' + name + ', eres mayor de edad.';
  }
  return 'Hola ' + name + ', eres menor de edad.';
}

const verificar1 = verificarEdad('Juan', 20);
const verificar2 = verificarEdad('Ana', 15);
console.log(verificar1);
console.log(verificar2);

/* function searchBiggest(numberA, numberB) {
  if (numberA > numberB) {
    console.log(numberA + ' es mayor que' + numberB);
  } else {
    console.log(numberB + ' es mayor que ' + numberA);
  }
} */

function searchBiggest(numberA, numberB) {
  if (numberA > numberB) {
    return numberA + ' es mayor que' + numberB;
  }
  return numberB + ' es mayor que ' + numberA;
}

const search1 = searchBiggest(5, 9);
const search2 = searchBiggest(6, 7);
console.log(search1);
console.log(search2);

/*function searchNumber(number) {
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
searchNumber(3); */

function searchNumber(number) {
  if (number > 0) {
    return number + ' es negativo ';
  } else if (number < 0) {
    return number + ' es positivo ';
  } else if (number === 0) {
    return number + ' es cero ';
  }
}

const result1 = searchNumber(-3);
const result2 = searchNumber(1);
const result3 = searchNumber(3);
console.log(result1);
console.log(result2);
console.log(result3);

/* function searchMarks(markA, markB, markC) {
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
searchMarks(9, 9, 9); */

function searchMarks(markA, markB, markC) {
  const average = (markA + markB + markC) / 3;

  if (average < 5) {
    return markA + markB + markC + ' suspenso ';
  } else if (average >= 5 && average <= 8) {
    return markA + markB + markC + ' aprobado ';
  } else if (average > 8) {
    return markA + markB + markC + ' matricula de honor ';
  }
}

const resultMarks1 = searchMarks(4, 3, 2);
const resultMarks2 = searchMarks(6, 8, 8);
const resultMarks3 = searchMarks(9, 9, 9);
console.log(resultMarks1);
console.log(resultMarks2);
console.log(resultMarks3);

/* function searchBiggest2(numberA, numberB, numberC) {
  if (numberA > numberB && numberA > numberC) {
    console.log(numberA + ' es el mayor de ellos');
  } else if (numberB > numberA && numberB > numberC) {
    console.log(numberB + ' es el mayor de ellos');
  } else if (numberC > numberA && numberC > numberB) {
    console.log(numberC + ' es el mayor de ellos');
  }
}

searchBiggest2(2, 30, 1); */

function searchBiggest2(number1, number2, number3) {
  if (number1 > number2 && number1 > number3) {
    return number1 + ' es el mayor de ellos';
  } else if (number2 > number1 && number2 > number3) {
    return number2 + ' es el mayor de ellos';
  } else if (number3 > number1 && number3 > number2) {
    return number3 + ' es el mayor de ellos';
  }
}

const resultBiggest2 = searchBiggest2(2, 20, 1);
console.log(resultBiggest2);

/* function checkDivision(number) {
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

checkDivision(350); */

function checkDivision(number) {
  if (number % 3 === 0 && number % 5 === 0) {
    return 'Es divisible por 3 y por 5';
  } else if (number % 3 === 0) {
    return 'Es divisible por 3';
  } else if (number % 5 === 0) {
    return 'Es divisible por 5';
  } else {
    return 'No es divisible por 3 ni por 5';
  }
}

const resultDivision = checkDivision(350);
console.log(resultDivision);

/* function checkNumber(number) {
  if (number % 2 === 0) {
    console.log(number + ' es un número par');
  } else {
    console.log(number + ' es un número impar');
  }
}

checkNumber(3); */

function checkNumber(number) {
  if (number % 2 === 0) {
    return number + ' es un número par';
  } else {
    return number + ' es un número impar';
  }
}

const resultNumber = checkNumber(3);
console.log(resultNumber);

/* function leapYear(year) {
  if (year % 4 === 0 || (year % 400 === 0 && year % 100 !== 0)) {
    console.log(year + ' es un año bisiesto');
  } else {
    console.log(year + ' no es un año bisiesto');
  }
}

leapYear(1997); */

function leapYear(year) {
  if (year % 4 === 0 || (year % 400 === 0 && year % 100 !== 0)) {
    return year + ' es un año bisiesto';
  } else {
    return year + ' no es un año bisiesto';
  }
}

const resultYear = leapYear(1997);
console.log(resultYear);
