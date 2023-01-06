//  Exercise 1 : Evaluation
// -------------------------------
5 >= 1 // true
0 === 1 // false
4 <= 1 // false
1 != 1 // false
"A" > "B" // false, because A=10 et B=20
"B" < "C" // true,  because B=20 et C=30
"a" > "A" // true, 
"b" < "A" // false
true === false // false
true != true // false

// Exercise 2 : Ask For Numbers
// -----------------------------------
let entry = prompt("Numbers separated by commas");
let numbers = entry.split(",");
let result=0;
numbers.forEach(val => {
    result+= Number(val);
});
console.log(result);

// Exercise 3 : Find Nemo
// ------------------------------
let sentence = prompt("Entrer votre phrase contenant Nemo hht");
let findNemo = sentence.indexOf("Nemo");
if (Number(findNemo) >= 0) {
    console.log(`I found Nemo at ${findNemo}`);
} else {
    console.log("I can’t find Nemo");
}

// Exercise 4 : Boom
// --------------------------
let nombre = prompt("Entrer un nombre");
if (Number(nombre)<2) {
    console.log("boom");
} else if (Number(nombre)>2) {
    console.log(`${nombre} o`);
} else if (Number(nombre)%2 === 0) {
    console.log(`${nombre} o!`);
} 
