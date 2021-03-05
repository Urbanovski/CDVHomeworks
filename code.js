// // ZADANIE 13
// class Person {
//     constructor(name, surname) {
//         this.name = name;
//         this.surname = surname;
//     }
// };

// class Student extends Person {
//     constructor(name, surname, indexNumber) {
//         super(name, surname);
//         this.indexNumber = indexNumber;
//     }
// };

// class Teacher extends Person {
//     construcor(name, surname, academicTitle) {
//         super(name, surname);
//         this.academicTitle = academicTitle;

//     }
// };

// // ZADANIE 7 Homework

// const numbersOne = [[1, 2], [3, 4], [5, 6]];

// function flatten(numbers) {
//     const almostFlattened = numbers.forEach(parseFloat(numbers));
// };

// //ZADANIE 2 
// function reversedNumbers (numbers) {
//     const parsedFloated = parseFloat(numbers);
//     const stringedNumbers = String(parsedFloated);
//     const splittedNumbers = stringedNumbers.split("");
//     const reverseTheNumbers = splittedNumbers.reverse()
//     const finalNumbers = splittedNumbers.join((''), 10);
//     return finalNumbers;
// };

// ZADANIE 3 zaawansowane

// function tetrahedralNumber (number) {
//     const numb = parseFloat(number);
//     const tetrahedaling = ((numb * (numb + 1) * (numb + 2)) / 6);
//     return tetrahedaling;
// };

// ZADANIE 4 
// function permutations (someString) {

//     if (!someString || typeof someString !== "string") {
//         return "Proszę wpisać słowo!";
//     } else if (someString.length < 2) {
//         return someString;
//     };

//     let arrayForPermutation = [];

//     for (let i = 0; i < someString.length; i++ ) {
//         let character = someString[i];
       
//         let restCharacters = someString.slice(0, i) + someString.slice(i + 1, someString.length);
        
//         for (let permutation of permutations(restCharacters)) {
//             arrayForPermutation.push(character + permutation);
//         }
//     }; 
//     return arrayForPermutation;
// };

// ZADANIE 6 - DO ZROZUMIENIA!

// resolver_tower_of_hanoi = function (s, d, e, n) {

//     // terminating condition
//     if (n <= 0) {
//         return 'Brak dysków!'
//     }

//     resolver_tower_of_hanoi(s, e, d, n - 1)

//     console.log(`Move Disk-${n} FROM ${s} TO ${d}`);

//     resolver_tower_of_hanoi(e, d, s, n - 1);
// };

// ZADANIE 1 ZAJĘCIA 2

// const receivedNumbers = prompt("Podaj liczby oddzielone przecinkami");
// let receivedNumbersInArray = receivedNumbers.split(",");
// if (receivedNumbersInArray.length < 2) {
//     alert("Podaj liczby!");
// } else {
//     var mapOfNumbers = receivedNumbersInArray.map(function(element){
//         return Number(element);
//     });
    
//     var correctNumbers = mapOfNumbers.filter(Number.isFinite);
//     var almostResult = 0;
//     for (var i = 0; i < correctNumbers.length; i++) {
//         almostResult += parseInt(correctNumbers[i], 10);
//     };
//     var result = almostResult / correctNumbers.length;
//     alert(result);
// };

// ZADANIE 2 ZAJĘCIA 2

// var receivedYear = Number(prompt('Podaj rok w celu sprawdzenia.'));
// console.log(typeof receivedYear);

// if (typeof receivedYear !== "number") {
//     alert('Podaj liczbę!');
// } else if ( receivedYear % 4 == 0 && receivedYear %100 != 0 || receivedYear % 400 == 0) {
//     alert('Ten rok jest przestępny.');
// } else {
//     alert("Ten rok nie jest przestępny.");
// };

//ZADANIE 3 ZAJĘCIA 2

// var receivedCTemp = Number(prompt('Podaj temperaturę w Celsjuszach.'));

// if (typeof receivedCTemp !== "number") {
//     alert("Podaj temperaturę w liczbach.");}
//     else {
//         var multipier = 100;
//         var tempInFahrenheit = ((receivedCTemp * 1.8) + 32);
//         var answer = Math.round(tempInFahrenheit * multipier) / multipier; 
//         alert("Podana temperatura wynosi " + answer + " stopni Fahrenheita.");
//     };

// ZADANIE 6 ZAJĘCIA 2

// let string = "ABRAKADABRA".split('');

// console.log(string.join(' '));
// for ( let i = 0 ; i < 10; ++i ) {

//  string.pop();
// string.unshift('')
// console.log(string.join(' '))
// };

//ZADANIE 7 ZAJĘCIA 2

// var numberObtained = prompt('Podaj jakąś liczbę.');
// let manyRows = "";
// for ( var i = 1; i <= numberObtained; ++i){
//     manyRows += "*"
//     manyRows += "*";
// };
// for (var i = 1; i <= numberObtained; ++i) {
//     console.log(manyRows);
// };

//ZADANIE 8 ZAJĘCIA 2 - brak wycentrowania

// let numberObtained = prompt('Podaj jakąś liczbę.');
// let manyRows = ""
// for (i = 1; i <= numberObtained; ++i){
//     manyRows += '*';
//     console.log(manyRows)
// };

// ROZWIĄZANIE DLA ZAD 8 
// function displayPyramid(n) { 
//     for (var i = 0; i < n; i++) { 
//       var str = ''; 
//       for (var j = 1; j < n-i; j++) { 
//         str = str + ' '; 
//       } 
//       for (var k = 1; k <= (2*i+1); k++) { 
//         str = str + '*'; 
//       } 
//       console.log(str); 
//     } 
//   } 

// Zadania z książki

// zad ze szukania wspólnych tablic

// const searchCommonElements = function (varr1, varr2) {
// if (varr1.length < varr2.length) {
// const trueResult = varr1.filter(value => varr2.includes(value));
// console.log(trueResult.sort((a, b) => a - b));
// } else {
//     const trueResult = varr2.filter(value => varr1.includes(value));
//     console.log(trueResult.sort((a,b) => a - b));
// }
// }

// zad ze szukania różniących się elementów tablic
// const searchDifferentElements = function (varr1, varr2) {
//     let result = [];
//     for (i = 0; i < varr1.length; i++) {
//         if (varr2.indexOf(varr1[i]) === -1) {
//             result.push(varr1[i]);
//             console.log(result)
//         };
//     };
//     for (i = 0; i < varr2.length; i++) {
//         if (varr1.indexOf(varr2[i]) === -1) {
//             result.push(varr2[i]);
//             console.log(result);
//         };
//     };
//     return result.sort((a,b) => a - b);;
// };
