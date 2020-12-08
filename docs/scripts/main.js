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