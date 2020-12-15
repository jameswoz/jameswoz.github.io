/* checks inputted password and takes user to appropiate page */
function getPassword() {
    let inputVal = document.getElementById("password-field").value;
    if(inputVal == "test") { goK(); }
    else if(inputVal == "test2") { goM(); }
    else if(inputVal == "test3") { goT(); }
}

function goK() {
    window.location.assign("/pages/k.html");
}

function goM() {
    window.location.assign("/pages/m.html");
}

function goT() {
    window.location.assign("/pages/t.html");
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
        setTimeout(returnToBase, 1800);
    }
    else if(player == "rock" && comp == "scissors") {
        outcome.classList.add("victory");
        outcome.innerHTML = "You won!";
        setTimeout(changePage, 2000);
    }
    else if(player == "rock" && comp == "paper") {
        outcome.classList.add("loss");
        outcome.innerHTML = "You lost!";
        setTimeout(returnToBase, 1800);
    }
    else if(player == "paper" && comp == "rock") {
        outcome.classList.add("victory");
        outcome.innerHTML = "You won!";
        setTimeout(changePage, 2000);
    }
    else if(player == "paper" && comp == "scissors") {
        outcome.classList.add("loss");
        outcome.innerHTML = "You lost!";
        setTimeout(returnToBase, 1800);
    }
    else if(player == "scissors" && comp == "paper") {
        outcome.classList.add("victory");
        outcome.innerHTML = "You won!";
        setTimeout(changePage,2000);
    }
    else if(player == "scissors" && comp == "rock") {
        outcome.classList.add("loss");
        outcome.innerHTML = "You lost!";
        setTimeout(returnToBase, 1800);
    }
}


function returnToBase() {
    var outcome = document.getElementById("outcome-text");
    outcome.classList.remove("loss");
    outcome.classList.add("base-case");
}

function changePage() {
    window.location.href = "final.html";
}