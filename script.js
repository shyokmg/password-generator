// Assignment Code
var generateBtn = document.querySelector("#generate");

var length;

var numeric = "0123456789";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var specialChars = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";



//Prompts order
// Ask for length input from 8-128 
// Ask for lowerCase
// Ask for upperCase
// Ask for numeric
// Ask for specialChars


// Write password to the #password input
function writePassword() {
  length = getLength();
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function getLength(){
  var lengthInput = window.prompt("Input length of password");
  
  if (lengthInput < 8){
    window.alert("Minimum length is 8");
    
  }
}

// Password Gen Function
function generatePassword(){
  var test = "test";
  return test;
}
