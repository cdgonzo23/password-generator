// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(length) {
  var result = ' ';
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

  var numericResult = confirm("Click OK to confirm including numeric characters.");

  var lowercaseResult = confirm("Click OK to confirm including lowercase characters.");

  var uppercaseResult = confirm("Click OK to confirm including uppercase characters.");

  for (var i = 0; i < lengthResult; i++) {
    result += specialCharacters.charAt(Math.floor(Math.random() * specialCharacters.length));
    result += numbers.charAt(Math.floor(Math.random() * numbers.length));
    result += lowercase.charAt(Math.floor(Math.random() * lowercase.length));
    result += uppercase.charAt(Math.floor(Math.random() * uppercase.length));
  }


  // var random = Math.floor(Math.random() * lowercase.length);

  // console.log("RANDOM", random, lowercase[random])

  // alert, prompt, confirm, parseInt(prompt), confirm gets the true false anser with ok and cancel

  return result;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
