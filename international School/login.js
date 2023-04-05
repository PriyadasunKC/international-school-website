var accountTypeCheck;
var userNameCheck;
var passwordCheck;

function confirmValidity1() {
    var btn = document.getElementById("signIn");
    document.addEventListener("click", accountTypeValidation);
    document.addEventListener("click", nameValidation);
    document.addEventListener("click", passwordValidation);
    btn.addEventListener("click", validSuccess);
}

function confirmValidity2(){
    document.removeEventListener("click",accountTypeValidation);
    document.removeEventListener("click", nameValidation);
    document.removeEventListener("click", passwordValidation);

}
function resetAll() {
    confirmValidity2();
    var type1 = document.getElementById("accTypeCheck");
    var userNam1= document.getElementById("userName");
    var password= document.getElementById("password");
    var typErr1 = document.getElementById("accountTypeError");
    var userName2 = document.getElementById("userNameError");
    var passwordError1 = document.getElementById("passwordError");

    type1.selectedIndex = 0;
    type1.style.borderColor = "black"
    userNam1.value = "";
    userNam1.style.borderColor = "black"
    password.value = "";
    password.style.borderColor = "black"
    typErr1.style.display = "none";
    userName2.style.display = "none";
    passwordError1.style.display = "none";
}

function accountTypeValidation() {
    var accTyperr = document.getElementById("accountTypeError");
    var acctype = document.getElementById("accTypeCheck");
    var idspecial = document.getElementById("identity");
    if (acctype.selectedIndex == 0) {
        acctype.style.borderColor = "red";
        acctype.style.borderWidth = "2px";
        accTyperr.style.display = "flex";
        accTyperr.innerText = " * Must select a account Type";
    } else {
        acctype.style.borderColor = "black";
        acctype.style.borderWidth = "1px";
        accTyperr.style.display = "none";
        accountTypeCheck = true;
    }
}


function nameValidation() {
    var userName = document.getElementById("userName");
    var usernameError = document.getElementById("userNameError");

    if (userName.value == "") {
        userName.style.borderColor = "red";
        userName.style.borderWidth = "2px";
        usernameError.style.display = "flex";
        usernameError.innerText = " * User name cannot be empty";
    } else {
        const NameRgx = /^[a-zA-Z]{2,50}( [a-zA-Z]{2,50}){0,2}$/;
        if (!(NameRgx.test(userName.value))) {
            userName.style.borderColor = "red";
            userName.style.borderWidth = "2px";
            usernameError.style.display = "flex";
            userName.innerText = " * Alphabet only";
        } else {
            userName.style.borderColor = "black";
            userName.style.borderWidth = "1px";
            usernameError.style.display = "none";
            userNameCheck = true;
        }
    }
}

function passwordValidation() {
    var passwordValue = document.getElementById("password");
    var pass = document.getElementById("passwordError");

    if (passwordValue.value == "") {
        passwordValue.style.borderColor = "red";
        pass.style.display = "flex";
        pass.innerText = " * Password cannot be empty";
    } else {
        const passwordRgx = /^[a-zA-Z][a-zA-Z0-9._-]{6,11}$/;
        if (!(passwordRgx.test(passwordValue.value))) {
            passwordValue.style.borderColor = "red";
            passwordValue.style.borderWidth = "2px";
            pass.style.display = "flex";
            pass.innerText = " * Length must be 7 to 12 characters";
        } else {
            passwordValue.style.borderColor = "black";
            passwordValue.style.borderWidth = "1px";
            pass.style.display = "none";
            passwordCheck = true;
        }
    }
}

function validSuccess() {
    var displaySuccess = document.getElementById("validateSuccessfull");
    if (accountTypeCheck && userNameCheck && passwordCheck) {
        displaySuccess.style.display = "block";
        accountTypeCheck = userNameCheck = passwordCheck = false;
        document.addEventListener("click", setTimeout(setTimeOut,4000));
    }
}

function setTimeOut() {
    var displaySuccess = document.getElementById("validateSuccessfull");
    displaySuccess.style.display = "none";
    accountTypeCheck = userNameCheck = passwordCheck = false;
    document.addEventListener("click", setTimeout(resetAll,500));
}