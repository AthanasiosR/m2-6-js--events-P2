// add js here

const signupF = document.querySelector("#signupForm");
const fullN = document.querySelector("#fullName");
const streetA = document.querySelector("#streetAddress");
const emailA = document.querySelector("#emailAddress");
const phoneN = document.querySelector("#phoneNumber");
const passW = document.querySelector("#password");
const confirmP = document.querySelector("#confirmPassword");
const terms = document.querySelector("#terms");
const error = document.querySelector("#error");

function formSubmit(ev) {
  ev.preventDefault();
  cleanUpForm();

  let password = passW.value;
  let confirmPass = confirmP.value;
  let agreedToTerms = terms.checked;

  if (!agreedToTerms) {
    window.alert("You must agree to the terms before continuing");
    return;
  }

  let errorField;
  let errorMessage;

  if (password.length < 10) {
    errorField = passW;
    errorMessage =
      "Your password is too short! Please provide a password that is at least 10 characters long.";
  } else if (password !== confirmPass) {
    errorField = confirmP;
    errorMessage =
      "Your passwords didn't match! Please provide the same password in each field.";
  }

  if (errorMessage && errorField) {
    error.style.display = "block";
    error.innerText = errorMessage;
    errorField.classList.add("errorField");
    errorField.focus();
    return;
  }

  alert("Success!");
}

function cleanUpForm() {
  passW.classList.remove("errorField");
  confirmP.classList.remove("errorField");
  error.style.display = "none";
}

signupF.addEventListener("submit", formSubmit);
