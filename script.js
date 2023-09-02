// Create button
var generateBtn = document.querySelector("#generate");

// Arrays for all available chars
var numeric = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y"];
var specialChars = ["!", "\"", "#", "$", "%", "&", "\'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];

// Write password to the #password input
function writePassword() {
  // Get length using function
  var lengthInput = getLength();
  // Check length input is not empty
  if (lengthInput != undefined) {
    // Confirmation windows to choose which type characters to include
    var getSpecial = window.confirm("Click OK to confirm inlcuding special characters.")
    var getNum = window.confirm("Click OK to confirm inlcuding numeric characters.")
    var getLower = window.confirm("Click OK to confirm inlcuding lowercase characters.")
    var getUpper = window.confirm("Click OK to confirm inlcuding uppercase characters.")

    // call generatePassword function with bool parameters
    var password = generatePassword(lengthInput, getSpecial, getNum, getLower, getUpper);
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
  } else {
    return;
  }
}

// function to check length input is valid
var getLength = function () {
  // Prompt window for length input
  var checkLength = window.prompt("How many characters would you like your password to contain?");
  // check if window has cancled, and close
  if (!checkLength) {
    return;
  }

  // Change input to integer and check length input is within range
  checkLength = Math.floor(checkLength);
  if (checkLength >= 8 && checkLength <= 128) {
    return checkLength;
  } else {
    window.alert("Please enter a valid length between 8 and 128.");
    return;
  }
}

// Password Gen Function
function generatePassword(hasLength, hasSpecialChar, hasNumeric, hasLowerCase, hasUpperCase) {

  // assign blank array for available characters to use
  var availableChars = [];

  // Check if each boolean is true and add to the array
  if (hasSpecialChar) {
    availableChars = availableChars.concat(specialChars);
  }
  if (hasNumeric) {
    availableChars = availableChars.concat(numeric);
  }
  if (hasLowerCase) {
    availableChars = availableChars.concat(lowerCase);
  }
  if (hasUpperCase) {
    availableChars = availableChars.concat(upperCase);
  }

  // assign blank string for password
  var genPass = "";

  // for loop to iterate from all available characters with the given length
  for (var i = 0; i < hasLength; i++) {
    // assign random number with index based on available characters
    var index = Math.floor(Math.random() * availableChars.length);
    // add random character to string
    genPass += availableChars[index];
  }
  return genPass;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


