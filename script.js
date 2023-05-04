// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var passwordResult = ' ';
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbers = "1234567890";
  var specialCharacters = "!#$%&'()*+,./:;<=>?@[\]^_`{|}~";

  var lengthResult = parseInt(prompt("How many characters will this password have? (Must be between 8 and 128 characters)"));

  if (lengthResult < 8) {
    alert("Please choose a number between 8 and 128");
    return generatePassword();
  }

  if (lengthResult > 128) {
    alert("Please choose a number between 8 and 128");
    return generatePassword();
  }

  if (!lengthResult) {
    alert("Please choose a number between 8 and 128");
    return generatePassword();
  }

  var specialResult = confirm("Click OK to confirm including special characters.");

  var numbersResult = confirm("Click OK to confirm including numeric characters.");

  var lowercaseResult = confirm("Click OK to confirm including lowercase characters.");

  var uppercaseResult = confirm("Click OK to confirm including uppercase characters.");

  var characterResult;

  if (specialResult && numbersResult && lowercaseResult && uppercaseResult) {
    characterResult = specialCharacters + numbers + lowercase + uppercase;
  }
  else if (specialResult && numbersResult && lowercaseResult && !uppercaseResult) {
    characterResult = specialCharacters + numbers + lowercase;
  }
  else if (specialResult && !numbersResult && lowercaseResult && uppercaseResult) {
    characterResult = specialCharacters + lowercase + uppercase;
  }
  else if (specialResult && numbersResult && !lowercaseResult && uppercaseResult) {
    characterResult = specialCharacters + numbers + uppercase;
  }
  else if (!specialResult && numbersResult && lowercaseResult && uppercaseResult) {
    characterResult = numbers + lowercase + uppercase;
  }
  else if (specialResult && numbersResult && !lowercaseResult && !uppercaseResult) {
    characterResult = specialCharacters + numbers;
  }
  else if (specialResult && !numbersResult && lowercaseResult && !uppercaseResult) {
    characterResult = specialCharacters + lowercase;
  }
  else if (specialResult && !numbersResult && !lowercaseResult && uppercaseResult) {
    characterResult = specialCharacters + uppercase;
  }
  else if (!specialResult && numbersResult && lowercaseResult && !uppercaseResult) {
    characterResult = number + lowercase;
  }
  else if (!specialResult && numbersResult && !lowercaseResult && uppercaseResult) {
    characterResult = number + uppercase;
  }
  else if (!specialResult && !numbersResult && lowercaseResult && uppercaseResult) {
    characterResult = lowercase + uppercase;
  }
  else if (specialResult && !numbersResult && !lowercaseResult && !uppercaseResult) {
    characterResult = specialCharacters;
  }
  else if (!specialResult && numbersResult && !lowercaseResult && !uppercaseResult) {
    characterResult = numbers;
  }
  else if (!specialResult && !numbersResult && lowercaseResult && !uppercaseResult) {
    characterResult = lowercase;
  }
  else if (!specialResult && !numbersResult && !lowercaseResult && uppercaseResult) {
    characterResult = uppercase;
  }
  else {
    alert("please choose at least 1 character type for your password");
    return generatePassword();
  }

  for (var i = 0; i < lengthResult; i++) {
    passwordResult += characterResult.charAt(Math.floor(Math.random() * characterResult.length));
  };

  return passwordResult;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
