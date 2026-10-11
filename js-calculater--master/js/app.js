alert("Hello! Welcome to my calculator");

function calculator(oneNumber, sign, towNumber) {
    if (sign == '+') {
        return oneNumber + towNumber;
    } else if (sign == '-') {
        return oneNumber - towNumber;
    } else if (sign == '*') {
        return oneNumber * towNumber;
    } else if (sign == '/') {
        if (towNumber === 0) return "Error: Division by zero!";
        return oneNumber / towNumber;
    } else if (sign == '**') {
        return oneNumber ** towNumber;
    } else {
        return "Invalid operator!";
    }
}

let continueCalculating = true;

while (continueCalculating) {
   
    let oneNumber = Number(prompt('Enter your first number 1️⃣'));

    
    let sign = prompt('Enter your operator ➕➖✖➗');

    
    let towNumber = Number(prompt('Enter your second number 2️⃣'));

    let result = calculator(oneNumber, sign, towNumber);
    alert('Result: ' + result + ' ✔');

    
    let answer = prompt("Do you want to perform another calculation? (Type 'yes' to continue)");

    if (answer !== 'yes' && answer !== 'y') {
        continueCalculating = false;
        alert("Goodbye! I hope you had a great time.");
    }
}
