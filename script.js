// Assignment Code
var generateBtn = document.querySelector("#generate");



var numeric = "0123456789";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var specialChars = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";


// Write password to the #password input
function writePassword() {
  // Get length using function
  var lengthInput = getLength();
  var getSpecial = window.confirm("Click OK to confirm inlcuding special characters.")
  var getNum = window.confirm("Click OK to confirm inlcuding numeric characters.")
  var getLower = window.confirm("Click OK to confirm inlcuding lowercase characters.")
  var getUpper = window.confirm("Click OK to confirm inlcuding uppercase characters.")
  

  var password = generatePassword(lengthInput, getSpecial, getNum, getLower, getUpper);
  var passwordText = document.querySelector("#password");
  passwordText.value = password;


}

// Password Gen Function
function generatePassword(length, hasSpecialChar, hasNumeric, hasLowerCase, hasUpperCase){
  var availableChars = "";
  if (hasSpecialChar){
    availableChars += specialChars;
  } 
  if (hasNumeric){
    availableChars+= numeric;
  }
  if(hasLowerCase){
    availableChars += lowerCase;
  }
  if(hasUpperCase){
    availableChars += upperCase;
  }
  return availableChars;


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


var getLength = function(){
  var checkLength = window.prompt("How many characters would you like your password to contain?");
  if(!checkLength){
    return;
  }
  checkLength = Math.floor(checkLength);
  if (checkLength >= 8 && checkLength <= 128) {
    return checkLength;
  } else {
    window.alert("Please enter a valid length between 8 and 128.");
    // writePassword();
    return;
  }
}