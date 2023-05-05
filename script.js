// Assignment Code
var generateBtn = document.querySelector("#generate");


function generatePassword() {
  var passwordResult = [];
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var lowercaseArr = lowercase.split('');
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var uppercaseArr = uppercase.split('');
  var numbers = "1234567890";
  var numbersArr = numbers.split('');
  var specialCharacters = "!#$%&'()*+,./:;<=>?@[\]^_`{|}~";
  var specialCharArr = specialCharacters.split('');

  var lengthResult = parseInt(prompt("How many characters will this password have? (Must be between 8 and 128 characters)"));

  if (!lengthResult || lengthResult < 8 || lengthResult > 128) {
    alert("Please choose a length between 8 and 128");
    return passwordResult;
  }

  var specialResult = confirm("Click OK to confirm including special characters.");

  var numbersResult = confirm("Click OK to confirm including numeric characters.");

  var lowercaseResult = confirm("Click OK to confirm including lowercase characters.");

  var uppercaseResult = confirm("Click OK to confirm including uppercase characters.");

  var stored = [];

  var characterResult = [];

  if (specialResult) {
    characterResult = characterResult.concat(specialCharArr);
    var randomCharacter = specialCharArr[Math.floor(Math.random() * specialCharArr.length)]
    stored = specialCharArr[randomCharacter]
  }
  if (numbersResult) {
    characterResult = characterResult.concat(numbersArr);
    var randomCharacter = specialCharArr[Math.floor(Math.random() * specialCharArr.length)]
    stored = specialCharArr[randomCharacter]
  }
  if (lowercaseResult) {
    characterResult = characterResult.concat(lowercaseArr);
    var randomCharacter = specialCharArr[Math.floor(Math.random() * specialCharArr.length)]
    stored = specialCharArr[randomCharacter]
  }
  if (uppercaseResult) {
    characterResult = characterResult.concat(uppercaseArr);
    var randomCharacter = specialCharArr[Math.floor(Math.random() * specialCharArr.length)]
    stored = specialCharArr[randomCharacter]
  }

  if (!specialResult && !numbersResult && !lowercaseResult && !uppercaseResult) {
     alert("please choose at least 1 character type for your password");
    return passwordResult;
  }
  

  for (var i = 0; i < lengthResult; i++) {
    // passwordResult += characterResult.charAt(Math.floor(Math.random() * characterResult.length));
    var randomCharacter = characterResult[Math.floor(Math.random() * characterResult.length)]
    passwordResult.push(randomCharacter)
  };

  return passwordResult.join('');
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
