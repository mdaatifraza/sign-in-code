
const passwordInput = document.getElementById("password");
const passwordCondition = document.getElementById("password-condition");



passwordInput.addEventListener("input", function() {
  const passwordValue = passwordInput.value;
   if (!(/[A-Z]/).test(passwordValue.charAt(0))) {
    passwordCondition.innerHTML = "Password must start with a capital letter";
  } else if (!(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/).test(passwordValue)) {
    passwordCondition.innerHTML = "Password must contain at least one special character";
  } else {
    passwordCondition.innerHTML = "";
  }
});

var emailcondition=document.getElementById("email");
var emailerror=document.getElementById("email-error");

function ValidateEmail(){
  if(!emailcondition.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}&/)){
    emailerror.innerHTML="Please enter a valid email";
    return false;
  }
  emailerror.innerHTML = "";
  return true;
}