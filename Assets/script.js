// Assigning variables
var generateBtn = document.querySelector("#generate");
var lettersUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lettersLower = "abcdefghigjklmopqrstuvwxyz";
var numbers = "0123456789";
var symbols = " !#$%&'()*+,-./:;<=>?@[]^_`{|}~";
var characters = "";

// Write password function to recieve inputs, operate generatePassword function & display output
function writePassword() {
  var password = "";
  var passwordText = document.querySelector("#password");
  // Recieve length input from user via prompt
  var pwLength = prompt("How long would you like the password to be? (Must be between 8 and 128 characters)");
  // rejections if crieteria not within bounds
  if (pwLength <= 7) return alert("Must be a number between 8 and 128");
  if (pwLength >=129) return alert("Must be a number between 8 and 128.");
  // if (pwLength == "a") return alert("Must be a number between 8 and 128.");

  // recieve further inputs/criteria for password
  var includeUpper = confirm("Do you want uppercase letters in your password?");
  var includeLower = confirm("Do you want lowercase letters in your password?");
  var includeNumbers = confirm("Do you want numbers in your password?");
  var includeSymbols = confirm("Do you want symbols in your password?");

  // function to generate password based on user inputs above
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

  // after prompts, run generatePassword function to do just that based on inputs
  generatePassword(pwLength, characters);

  // outputs
  passwordText.value = password;
  console.log(password);
  alert(password);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
