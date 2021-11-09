// 1. far apparire in pagina 5 numeri casuali 
// 1.2 da li far partire un timer di 30 secondi 
// 2. dopo 30 secondi l'utente deve inserire i numeri visti precedentemente 
// 3. dare un riscontro dei numeri indovinati

let containerNumbers = document.getElementById("container-numbers");
let randomNumbers = [];
let userNumbers = [];

for (let i = 0; i < 5; i++) {
    var num = Math.floor(Math.random() * 100);
    randomNumbers.push(num);

    setTimeout(myFunction, 3000);
    function myFunction() {
        document.getElementById('container-numbers').style.display='none';
        let userNum =  prompt("Inserisci numero");
        userNumbers.push(userNum);
    }
}
containerNumbers.innerHTML = randomNumbers;

let feedback = document.getElementById("feedback");
let numValidator = false;

for (let i = 0; i < userNumbers.length; i++) {
    if (userNumbers == randomNumbers[i]) {
        numValidator = true;
    }
}

if (numValidator === true) {
    feedback.innerHTML = num;
} else {

}