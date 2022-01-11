// Assigning variables
var generateBtn = document.querySelector("#generate");
var lettersUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lettersLower = "abcdefghigjklmopqrstuvwxyz";
var numbers = "0123456789";
var symbols = " !#$%()*+,-./:;<=>?'@[&]^_`{|}~";
var characters = "";

// Write password function to recieve inputs, operate generatePassword function & display output
function writePassword() {
  var password = "";
  var base = "";
  var passwordText = document.querySelector("#password");
  // Recieve length input from user via prompt
  var userInput = prompt("How long would you like the password to be? (Must be between 8 and 128 characters)");
  var pwLength = parseInt(userInput);

  // rejections if crieteria not within bounds
  if (pwLength <= 7 || pwLength >=129) return alert("Must be a number between 8 and 128");

  // recieve further inputs/criteria for password
  var includeUpper = confirm("Do you want uppercase letters in your password?");
  var includeLower = confirm("Do you want lowercase letters in your password?");
  var includeNumbers = confirm("Do you want numbers in your password?");
  var includeSymbols = confirm("Do you want symbols in your password?");

  // function to generate the password
  function generatePassword(length, chars) {

    // Creating base password to include one of each peramiter set by user(base) & Creating list of allowed characters based on paramiters set by user (char)
    includeLower === true ? ((base += lettersLower.charAt(Math.floor(Math.random() * lettersLower.length))), (chars += lettersLower)) : "";
    includeUpper === true ? (base += lettersUpper.charAt(Math.floor(Math.random() * lettersUpper.length)), (chars += lettersUpper)) : "";
    includeNumbers === true ? (base += numbers.charAt(Math.floor(Math.random() * numbers.length)), (chars += numbers)) : "";
    includeSymbols === true ? (base += symbols.charAt(Math.floor(Math.random() * symbols.length)), (chars += symbols)) : "";

    // Creating for loop to randomize password. if i is less than the requested length (less base length to ensure sufficient length) continue the loop, increasing by one each time. 
    // Picks number between 0 and length of allowed characters and adds it to password until it is of sufficient length.
    for (let i = base.length; i < length; i++) {
      password += chars.charAt(
        Math.floor(Math.random() * chars.length)
      );
    }
    return password;
  }

  // after prompts, run generatePassword function to do just that based on inputs
  generatePassword(pwLength, characters);

  // outputs
  passwordText.value = (password + base);
  console.log(password + base);
  alert(password + base);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);