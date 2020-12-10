/*
  Use regex to update the prototype functions below

  Symbol for email validation: https://stackoverflow.com/questions/8359566/regex-to-match-symbols
  Specific symbols: https://stackoverflow.com/questions/18643157/regex-must-contain-specific-letters-in-any-order
*/

var currentUserNames = ["memer27", "jumbo-shrempf", "class-of-1984"];

$("#first-form").submit(function(e){
  e.preventDefault();

  var name = $("#name-input").val();
  var email = $("#email-input").val();
  var username = $("#username-input").val();
  var password = $("#password-input").val();

  if(name.isBlank()){
    alert("please enter name")
  } else if (!email.isValidEmail()){
    alert("please enter valid email")
  } else if (currentUserNames.usernameExists(username)){
    alert("username is already taken")
  } else if (!password.isValidPassword()){
    alert("password is invalid. It must be at least 7 characters, contain a symbol, contain an uppercase letter, and contain a number");
  } else {
    var creds = {
      name: name,
      email: email,
      username: username,
      password: password,
    }

    console.log(creds);
  }
});

String.prototype.isBlank = function(){
  return this == "";
};

String.prototype.isValidEmail = function(){
  return this.match(/(?=.*@)(?=.*\.)/g);
}

Array.prototype.usernameExists = function(username){
  return this.indexOf(username) > -1
}

String.prototype.isValidPassword = function(){
  return this.length > 6 && this.match(/[A-Z]/g) && this.match(/[0-9]/g) && this.match(/[^\p{L}\d\s@#]/u);
}
