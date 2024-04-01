
let settingsButton = document.querySelector(".settings");
let txtBox = document.querySelector(".txt-box");

settingsButton.addEventListener("click", function () {
    if (txtBox.style.display == "initial") {
        txtBox.style.height = "0px";
        txtBox.style.display = "none";

    }
    else {

        txtBox.style.display = "initial";

        txtBox.style.height = "200px";
    }

});


let emailInput = document.getElementById("email");
let passInput = document.getElementById("password");
let confirmInput = document.getElementById("confirmp");
let signUp=document.getElementById("sign-up");

let passEqual = true;
let validEmail = true;

function errorMessage(message) {
    let span = document.createElement("span");
    span.innerText = message;
    span.style.color = "red";
    return span;
}
function checkEmailValue() {
    emailInput.parentElement.querySelectorAll("span").forEach(elem => {
        elem.remove();
    });
    if (!emailInput.value.includes('@')) {
        let span = errorMessage("Invalid email format!")
        emailInput.parentElement.appendChild(span);
        return false;
    }
    return true;
}
emailInput.addEventListener("input", function () {
    if (!validEmail) {
        checkEmailValue();
    }
})

// emailInput.addEventListener("input", function () {
//     validEmail = checkEmailValue(); // Fixed the function name here
// });

function containsDigit(password) {
    for (let i = 0; i < pass.length; i++) {
        if (!isNaN(password[i])) {
            return true;
        }
    }
    return false;
}

function checkPasswordValue() {
    passInput.parentElement.querySelectorAll("span").forEach(elem => {
        elem.remove();
    })
    confirmInput.parentElement.querySelectorAll("span").forEach(elem => {
        elem.remove();
    })
    let checkValue = true;
    if (passInput.value != confirmInput.value) {
        let span = errorMessage("Passwords don't match!");
        confirmInput.parentElement.appendChild(span);
        checkValue = false;
    }
    if (!containsDigit(passInput.value)) {
        let span = errorMessage("Password must contain digit!");
        passInput.parentElement.appendChild(span);
        checkValue = false;
    }
return checkValue;
}
passInput.addEventListener("input",function(){
    if(!passEqual){
        checkPasswordValue();
    }
})


signUp.addEventListener("click", function(e) {
    e.preventDefault();
    passEqual =  checkPasswordValue();
    validEmail = checkEmailValue();
});



