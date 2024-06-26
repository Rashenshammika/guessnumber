// console.log("Hello");

// let name = true;

// console.log(typeof name);

// class Customer{
//     name;
//     age;
//     address;

//     // Customer(){

//     // }

//     constructor(name,age,address){
//         this.name=name;
//         this.age=age;
//         this.address=address;
//     }

//     setName(name) {
//         this.name=name;
//     }
//     getName(){
//         return this.name;
//     }

// }



// let randomNumber = Math.floor((Math.random() * 10) + 1); // Initial random number

// function calc() {
//     let num1 = parseFloat(document.getElementById("number").value); // Get user's input
    
//     let lblOutput = document.getElementById("Output"); // Output element
    
//     let result;
//     if (num1 === randomNumber) {
//         result = "Yes, it matches!";
//         lblOutput.textContent = result;
//         // Generate a new random number for the next guess
//         randomNumber = Math.floor((Math.random() * 10) + 1);
//         console.log("New random number:", randomNumber);
//     } else {
//         result = "No, it doesn't match.";
//         lblOutput.textContent = result;
//     }
// }




let attemptsLeft = 3; // Number of attempts allowed
let randomNumber = Math.floor((Math.random() * 10) + 1); // Initial random number

function calc() {
    let num1 = parseFloat(document.getElementById("number").value); // Get user's input
    
    let lblOutput = document.getElementById("Output"); // Output element
    
    let result;
    if (num1 === randomNumber) {
        result = "Yes, it matches!";
        lblOutput.textContent = result;
        // Generate a new random number for the next guess
        randomNumber = Math.floor((Math.random() * 10) + 1);
        console.log("New random number:", randomNumber);
        attemptsLeft = 3; // Reset attempts
    } else {
        attemptsLeft--; // Decrease attempts left
        if (attemptsLeft > 0) {
            result = `No, it doesn't match. ${attemptsLeft} attempt(s) left.`;
            lblOutput.textContent = result;
        } else {
            result = "Game over.";
            lblOutput.textContent = result;
            randomNumber = Math.floor((Math.random() * 10) + 1); // Reset random number
            attemptsLeft = 3; // Reset attempts
            console.log("New game started. Random number:", randomNumber);
        }
    }
}
