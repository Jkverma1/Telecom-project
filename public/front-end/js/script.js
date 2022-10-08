// for password hide

let passwordInput = document.getElementById("txtPassword"),
  passwordInput2 = document.getElementById("txtPassword2"),
  toggle = document.getElementById("btnToggle"),
  toggle2 = document.getElementById("btnToggle2"),
  icon = document.getElementById("eyeIcon"),
  icon2 = document.getElementById("eyeIcon2");

function togglePassword() {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    icon.classList.remove("fa-eye-slash");
    icon.classList.add("fa-eye");
    //toggle.innerHTML = 'hide';
  } else {
    passwordInput.type = "password";
    icon.classList.add("fa-eye-slash");
    icon.classList.remove("fa-eye");
    //toggle.innerHTML = 'show';
  }
}
function togglePassword2() {
  if (passwordInput2.type === "password") {
    passwordInput2.type = "text";
    icon2.classList.remove("fa-eye-slash");
    icon2.classList.add("fa-eye");
    //toggle.innerHTML = 'hide';
  } else {
    passwordInput2.type = "password";
    icon2.classList.add("fa-eye-slash");
    icon2.classList.remove("fa-eye");
    //toggle.innerHTML = 'show';
  }
}

function checkInput() {
  //if (passwordInput.value === '') {
  //toggle.style.display = 'none';
  //toggle.innerHTML = 'show';
  //  passwordInput.type = 'password';
  //} else {
  //  toggle.style.display = 'block';
  //}
}

toggle.addEventListener("click", togglePassword, false);
toggle2.addEventListener("click", togglePassword2, false);
passwordInput.addEventListener("keyup", checkInput, false);

// for otp box

function codeverify() {
  var digit1 = document.getElementById("first").value;
  var digit2 = document.getElementById("second").value;
  var digit3 = document.getElementById("third").value;
  var digit4 = document.getElementById("fourth").value;
  var digit5 = document.getElementById("fifth").value;
  var digit6 = document.getElementById("sixth").value;
  if (
    digit1 == "" ||
    digit2 == "" ||
    digit3 == "" ||
    digit4 == "" ||
    digit5 == "" ||
    digit6 == ""
  ) {
    document.querySelector(".code-invalid").style.display = "block";
    document.querySelector("#first").style.borderColor = "red";
    document.querySelector("#second").style.borderColor = "red";
    document.querySelector("#third").style.borderColor = "red";
    document.querySelector("#fourth").style.borderColor = "red";
    document.querySelector("#fifth").style.borderColor = "red";
    document.querySelector("#sixth").style.borderColor = "red";
  } else {
    document.getElementById("myForm").style.display = "block";
    document.querySelector(".code-invalid").style.display = "none";
    document.querySelector("#first").style.borderColor = "#dcdcdcfc";
    document.querySelector("#second").style.borderColor = "#dcdcdcfc";
    document.querySelector("#third").style.borderColor = "#dcdcdcfc";
    document.querySelector("#fourth").style.borderColor = "#dcdcdcfc";
    document.querySelector("#fifth").style.borderColor = "#dcdcdcfc";
    document.querySelector("#sixth").style.borderColor = "#dcdcdcfc";
  }
}

function NewpasswordVerify() {
  newPassword = document.getElementById("txtPassword").value;
  ConfirmnewPassword = document.getElementById("txtPassword2").value;
  if (newPassword == ConfirmnewPassword)
    document.getElementById("myForm").style.display = "block";
}
