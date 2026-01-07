//Exercice 1
function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function mult(a, b) {
    return a * b;
}

function div(a, b) {
    return a / b;
}

function mod(a, b) {
    return a % b;
}

// Pour tester
//console.log(add(21, 21));   // 42
//console.log(sub(63, 21));   // 42
//console.log(mult(21, 2));   // 42
//console.log(div(84, 2));    // 42
//console.log(mod(42, 2));    // 0

// Exercice 2
function askUserOperation() {
    return prompt("Quelle opération voulez-vous faire ? (+, -, *, /, %)");
}

function askUserFirstNumber() {
    return Number(prompt("Entrez le premier nombre :"));
}

function askUserSecondNumber() {
    return Number(prompt("Entrez le second nombre :"));
}

// Pour tester
//let operation = askUserOperation();
//let firstNumber = askUserFirstNumber();
//let secondNumber = askUserSecondNumber();

//console.log(operation);
//console.log(firstNumber);
//console.log(secondNumber);

// Exercice 3 : calculator
function calculator() {
    let operation = askUserOperation();
    let firstNumber = askUserFirstNumber();
    let secondNumber = askUserSecondNumber();
    let result;

    if (operation === "+") {
        result = add(firstNumber, secondNumber);
    } else if (operation === "-") {
        result = sub(firstNumber, secondNumber);
    } else if (operation === "*") {
        result = mult(firstNumber, secondNumber);
    } else if (operation === "/") {
        result = div(firstNumber, secondNumber);
    } else if (operation === "%") {
        result = mod(firstNumber, secondNumber);
    } else {
        console.log("Opération inconnue");
        return;
    }

    console.log("Résultat :", result);
}

// Appel de la fonction
calculator();
