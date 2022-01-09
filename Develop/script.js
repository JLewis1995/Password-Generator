// Current issue - output is undefined but appears to be generating a PW on top of undefined.

// Assignment Code
var generateBtn = document.querySelector("#generate");
var lettersUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lettersLower = "abcdefghigjklmopqrstuvwxyz";
var numbers = "0123456789";
var symbols = " !#$%&'()*+,-./:;<=>?@[]^_`{|}~";
var characters = "";

// Write password to the #password input
function writePassword() {
  var password = "";
  var passwordText = document.querySelector("#password");
  var pwLength = prompt("How long would you like the password to be? (Must be between 8 and 128 characters)");
  if (pwLength <= 7) return alert("Must be a number between 8 and 128");
  if (pwLength >=129) return alert("Must be a number between 8 and 128.");
  if (pwLength == "a") return alert("Must be a number between 8 and 128.");

  var includeUpper = confirm("Do you want UpperCase Letters in your Password?");
  var includeLower = confirm("Do you want LowerCase Letters in your Password?");
  var includeNumbers = confirm("Do you want Numbers in your Password?");
  var includeSymbols = confirm("Do you want Symbols in your Password?");

  function generatePassword(length, chars) {
    includeLower === true ? (chars += lettersLower) : "";
    includeUpper === true ? (chars += lettersUpper) : "";
    includeNumbers === true ? (chars += numbers) : "";
    includeSymbols === true ? (chars += symbols) : "";
    for (let i = 0; i < length; i++) {
      password += chars.charAt(
        Math.floor(Math.random() * chars.length)
      );
    }
    return password;
  }

  generatePassword(pwLength, characters);

  passwordText.value = password;
  console.log(password);
  alert(password);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
