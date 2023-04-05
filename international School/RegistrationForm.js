var valid1 = false;
var valid2 = false;
var valid3 = false;
var valid4 = false;
var valid5 = false;
var valid6 = false;
var valid7 = false;


function confirmValidity1() {
    var btn = document.getElementById("submit");
    document.addEventListener("click", confirmValidity);
    document.addEventListener("click", userNameValidation);
    document.addEventListener("click", nameValidation);
    document.addEventListener("click", countryValidation);
    document.addEventListener("click", emailValidation);
    document.addEventListener("click", genderValidation);
    document.addEventListener("click", languageValidation);
    btn.addEventListener("click", validSuccess);
}

function confirmValidity2() {
    var btn = document.getElementById("reset");
    document.removeEventListener("click", confirmValidity);
    document.removeEventListener("click", userNameValidation);
    document.removeEventListener("click", nameValidation);
    document.removeEventListener("click", countryValidation);
    document.removeEventListener("click", emailValidation);
    document.removeEventListener("click", genderValidation);
    document.removeEventListener("click", languageValidation);
    document.removeEventListener("click", validSuccess);
}


function resetAll() {

    confirmValidity2();
    var userId = document.getElementById("idValue");
    var userName = document.getElementById("nameValue");
    var passWord = document.getElementById("passwordValue");
    var address = document.getElementById("AddValue");
    var about = document.getElementById("aboutValue");
    var country = document.getElementById("dropMenu");
    var zipCode = document.getElementById("zipValue");
    var email = document.getElementById("emailValue");
    var male = document.getElementById("maleChecked");
    var female = document.getElementById("femaleChecked");
    var english = document.getElementById("englishChecked");
    var nonEnglish = document.getElementById("nonEnglishChecked");
    var idErr = document.getElementById("idError");
    var pass = document.getElementById("passwordError");
    var namerr = document.getElementById("nameError");
    var selectCtry = document.getElementById("countryError");
    var emailerr = document.getElementById("emailError");
    var genderError = document.getElementById("genderError");
    var languageError1 = document.getElementById("languageError");
    var displaySuccess = document.getElementById("validatedNotification");

    userId.value = "";
    userName.value = "";
    passWord.value = "";
    address.value = "";
    country.selectedIndex = 0;
    zipCode.value = "";
    about.value = "";
    email.value = "";
    male.checked = false;
    female.checked = false;
    english.checked = false;
    nonEnglish.checked = false;
    idErr.style.display = "none";
    userId.style.borderColor = "black";
    pass.style.display = "none";
    passWord.style.borderColor = "black";
    namerr.style.display = "none";
    userName.style.borderColor = "black";
    selectCtry.style.display = "none";
    emailerr.style.display = "none";
    genderError.style.display = "none";
    languageError1.style.display = "none";
    displaySuccess.style.display = "none";
    userId.focus();
}

function confirmValidity() {
    var Idvalue = document.getElementById("idValue");
    var Id = document.getElementById("idError");

    if (Idvalue.value == "") {
        Idvalue.style.borderColor = "red";
        Id.style.display = "flex";
        Id.innerText = " * User Id cannot be empty";
    } else {
        const userNameRgx = /^[a-zA-Z][a-zA-Z0-9._-]{4,11}$/;
        if (!(userNameRgx.test(Idvalue.value))) {
            Idvalue.style.borderColor = "red";
            Id.style.display = "flex";
            Id.innerText = " * Length must be 5 to 12 characters";
        } else {
            valid1 = true;
            Idvalue.style.borderColor = "black";
            Id.style.display = "none";
        }
    }
}

function userNameValidation() {
    var passwordValue = document.getElementById("passwordValue");
    var pass = document.getElementById("passwordError");

    if (passwordValue.value == "") {
        passwordValue.style.borderColor = "red";
        pass.style.display = "flex";
        pass.innerText = " * Password cannot be empty";
    } else {
        const passwordRgx = /^[a-zA-Z][a-zA-Z0-9._-]{6,11}$/;
        if (!(passwordRgx.test(passwordValue.value))) {
            passwordValue.style.borderColor = "red";
            pass.style.display = "flex";
            pass.innerText = " * Length must be 7 to 12 characters";
        } else {
            valid2 = true;
            passwordValue.style.borderColor = "black";
            pass.style.display = "none";

        }
    }
}

function nameValidation() {
    var nameValue = document.getElementById("nameValue");
    var nameerr = document.getElementById("nameError");

    if (nameValue.value == "") {
        nameValue.style.borderColor = "red";
        nameerr.style.display = "flex";
        nameerr.innerText = " * Name cannot be empty";
    } else {
        const NameRgx = /^[a-zA-Z]{2,50}( [a-zA-Z]{2,50}){0,2}$/;
        if (!(NameRgx.test(nameValue.value))) {
            nameValue.style.borderColor = "red";
            nameerr.style.display = "flex";
            nameerr.innerText = " * Alphabet only";
        } else {
            valid3 = true;
            nameValue.style.borderColor = "black";
            nameerr.style.display = "none";
        }
    }
}

function countryValidation() {
    var countryerr = document.getElementById("countryError");
    var country = document.getElementById("dropMenu");
    if (country.selectedIndex == 0) {
        countryerr.style.display = "flex";
        countryerr.innerText = " * Must select a country";
    } else {
        valid4 = true;
        countryerr.style.display = "none";
    }
}

function emailValidation() {
    var emailvalue = document.getElementById("emailValue");
    var emailerr = document.getElementById("emailError");


    if (emailvalue.value == "") {
        emailerr.style.borderColor = "red";
        emailerr.style.display = "flex";
        emailerr.innerText = " * Email cannot be country";
    } else {
        const emailRgx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!(emailRgx.test(emailvalue.value))) {
            emailerr.style.borderColor = "red";
            emailerr.style.display = "flex";
            emailerr.innerText = " * Enter a valid email (example@example.com)";
        } else {
            valid5 = true;
            emailerr.style.display = "none";

        }
    }
}

function genderValidation() {
    var male = document.getElementById("maleChecked");
    var female = document.getElementById("femaleChecked");
    var genderError = document.getElementById("genderError");
    if (male.checked == false && female.checked == false) {
        genderError.style.display = "flex";
        genderError.innerText = " * Select Gender";
    } else {
        valid6 = true;
        genderError.style.display = "none";
    }
}

function languageValidation() {
    var english = document.getElementById("englishChecked");
    var nonEnglish = document.getElementById("nonEnglishChecked");
    var languageError = document.getElementById("languageError");

    if (english.checked == false && nonEnglish.checked == false) {
        languageError.style.display = "flex";
        languageError.innerText = " * Select Language";
    } else {
        valid7 = true;
        languageError.style.display = "none";
    }
}


function validSuccess() {
    var displaySuccess = document.getElementById("validatedNotification");
    if (valid1 && valid2 && valid3 && valid4 && valid5 && valid6 && valid7) {
        displaySuccess.style.display = "block";
        valid1 = valid2 = valid3 = valid4 = valid5 = valid6 = valid7 = false;
        document.addEventListener("click", setTimeout(setTimeOut,4000));
    }
}

function setTimeOut() {
    var displaySuccess = document.getElementById("validatedNotification");
    displaySuccess.style.display = "none";
    valid1 = valid2 = valid3 = valid4 = valid5 = valid6 = valid7 = false;
    document.addEventListener("click", setTimeout(resetAll,500));
}