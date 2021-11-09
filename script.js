// 1. far apparire in pagina 5 numeri casuali 
// 1.2 da li far partire un timer di 30 secondi 
// 2. dopo 30 secondi l'utente deve inserire i numeri visti precedentemente 
// 3. dare un riscontro dei numeri indovinati

const containerNumbers = document.getElementById("container-numbers");
const feedback = document.getElementById("feedback");
const randomNumbers = [];
const userNumbers = [];

while (randomNumbers.length < 5) {
    const num = Math.floor(Math.random() * 100) + 1;
    let duplicateNum = false;

    for (i = 0; i < randomNumbers.length; i++) {
        if (num === randomNumbers[i]) {
            duplicateNum = true;
        }
    }

    if (duplicateNum == false) {
        randomNumbers.push(num);
    }
}
containerNumbers.innerHTML = randomNumbers;

setTimeout(myFunction, 3000);

function myFunction() {
    document.getElementById('container').style.display='none';
    for (let i = 0; i < 5; i++) {
        let userNum =  prompt("Inserisci numero");
        userNumbers.push(userNum);

        if (userNumbers[i] == randomNumbers[i]) {
            feedback.innerHTML += userNumbers[i] + ", ";
        }
    }
}