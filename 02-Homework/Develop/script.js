// Assignment Code 


let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
let upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "+", "/", "|", "~"];
let lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "x"];
let upperCase;
let specChar;
let lowerCase;
let num2;
let userPassword;
let newPassword = [];

let generateBtn = document.querySelector("#generate");

function askUser() {
  upperCase = confirm("Would like your new password to have UpperCase characters?");
  specChar = confirm("Would like your new password to have special characters?");
  lowerCase = confirm("Would like your new password to have lowercase characters??");
  num2 = confirm("Would like your new password to have numeric characters?");
};


function generatePassword() {
  // find out the length of the new password
  userPassword = prompt("How many characters do you want your Password to contain?");

  while (userPassword < 7 || userPassword > 128) {
    alert("Password length must be between 8 to 128 characters please try again");
    userPassword = prompt("How many characters do you want your Password to contain?");
  }
  alert("You have chosen " + userPassword + " characters")
  //console.log(userPassword);

  // ask the user for the options they want to contain in the password
  askUser();

  while (lowerCase === false && upperCase === false && num2 === false && specChar === false) {
    alert("Password must contain at least one criteria please try again");
    userPassword = prompt("How many characters do you want your Password to contain?");
    askUser();
  }


  if (lowerCase === true) {
    newPassword = newPassword.concat(lower);

  } if (upperCase === true) {
    newPassword = newPassword.concat(upper);

  } if (num2 === true) {
    newPassword = newPassword.concat(nums);

  } if (specChar === true) {
    newPassword = newPassword.concat(specialChar);


  }
  let randomPass = "";
  for (var i = 0; i < parseInt(userPassword); i++) {
    randomPass = randomPass + newPassword[Math.floor(Math.random() * newPassword.length)];
  }

  //console.log(newPassword);
  console.log(randomPass);

  var userPasswordText = document.querySelector("#password");
  userPasswordText.innerHTML = randomPass;

  newPassword = [];
};










// Write password to the #password input
function writePassword() {
  var password = generatePassword()



};


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
console.log(password);


