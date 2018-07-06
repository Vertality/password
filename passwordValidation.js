var Confirm = document.getElementById("ConfirmNewPassword");
var Message = document.getElementById("error");
Confirm.onkeyup = function() {
  var Password = document.getElementById("CreateANewPassword");

  if (Password.value === "") {
    Message.innerHTML = "Blank";
  } else if (Password.value === Confirm.value) {
    Message.innerHTML = "Match";
    Message.classList.add("colorgreen");
  } else {
    Message.innerHTML = "NoMatch";
    Message.classList.add("redbutton");
  }
};
