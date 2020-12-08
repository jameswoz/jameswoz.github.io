function getPassword() {
    let inputVal = document.getElementById("password-field").value;
    if(inputVal == "test") {
        window.alert("test success");
    }
}

document.querySelector("submit-btn").addEventListener("keyup", event => {
    if(event.key !== "Enter") return;
    document.querySelector("submit-btn").click();
    event.preventDefault(); 
});