/* checks inputted password and takes user to appropiate page */
function getPassword() {
    let inputVal = document.getElementById("password-field").value;
    if(inputVal == "test") { window.location.href = "/pages/k.html"; }
    else if(inputVal == "test2") { document.location.href = 'http://jameswoz.github.io/k'; }
    else if(inputVal == "test3") { document.location.href = 'http://jameswoz.github.io/k'; }
}

/* submits password when enter is hit */
document.querySelector("submit-btn").addEventListener("keyup", event => {
    if(event.key !== "Enter") return;
    document.querySelector("submit-btn").click();
    event.preventDefault(); 
});

/* RPS Game */

function choseRock() {
    let player = "rock";
    let comp = compChoose();
    playGame(player, comp);
}

function chosePaper() {
    let player = "paper";
    let comp = compChoose();
    playGame(player, comp);
}

function choseScissors() {
    let player = "scissors";
    let comp = compChoose();
    playGame(player, comp);
}

function compChoose() {
    let arr = [1, 2, 3];
    let random = arr[Math.floor(Math.random() * arr.length)];
    let value;
    switch (random) {
        case 1:
            value = "rock";
            break;
        case 2:
            value = "paper";
            break;
        default:
            value = "scissors";
        }
    return value;
}

function playGame(player, comp) {
var outcome = document.getElementById("outcome-text");
    if(player == comp) {
        outcome.innerHTML = "You tied!";
        outcome.classList.add("loss");
        setTimeout(returnToBase, 4000);
    }
    else if(player == "rock" && comp == "scissors") {
        outcome.classList.add("victory");
        outcome.innerHTML = "You won!";
    }
    else if(player == "rock" && comp == "paper") {
        outcome.classList.add("loss");
        outcome.innerHTML = "You lost!";
        setTimeout(returnToBase, 4000);
    }
    else if(player == "paper" && comp == "rock") {
        outcome.classList.add("victory");
        outcome.innerHTML = "You won!";
    }
    else if(player == "paper" && comp == "scissors") {
        outcome.classList.add("loss");
        outcome.innerHTML = "You lost!";
        setTimeout(returnToBase, 4000);
    }
    else if(player == "scissors" && comp == "paper") {
        outcome.classList.add("victory");
        outcome.innerHTML = "You won!";
    }
    else if(player == "scissors" && comp == "rock") {
        outcome.classList.add("loss");
        outcome.innerHTML = "You lost!";
        setTimeout(returnToBase, 4000);
    }
}


function returnToBase() {
    var outcome = document.getElementById("outcome-text");
    outcome.classList.remove("loss");
    outcome.classList.add("base-case");
}