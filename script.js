// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(){
  //getting user input for password parameters
  const lower = window.confirm("Would you like your password to contain lower case letters?");
  const upper = window.confirm("Would you like your password to contain upper case letters?");
  const numbers = window.confirm("Would you like your password to contain numbers?");
  const special = window.confirm("Would you like your password to contain special characters?")
  const long = window.prompt("how long would you like your password to be? (at least 8 characters)")
  let password = "";

  //defining arrays for each type on characters available for passwrod
  const alphabetcharLower = 'abcdefghijklmnopqrstuvwxyz'.split(
    ''
  );

  const alphabetcharUpper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(
    ''
  );

  const NumChar = '0123456789'.split(
    ''
  );

  var specialChar = '!@#$%&*'.split(
    ''
  );
  
  //checks password length is at least 8 before running rest of password generation
  if(long >= 8){
    //Checks at least one parameter is true
    if(lower == true && upper == true && numbers == true && special == true) {
      const allChar = [].concat(alphabetcharLower, alphabetcharUpper, NumChar, specialChar);
      
      //generates random number based on array length to pull random character for the user inputed password length
      for(i = 0; i < long; i++){
        password = password + allChar[Math.floor(Math.random() * (allChar.length))];
      }
    }else if(lower == true){
      //checks for all cominations of parameters
      if(upper == false && numbers == false && special == false){
        for(i = 0; i < long; i++){
          password = password + alphabetcharLower[Math.floor(Math.random() * (alphabetcharLower.length))];
        }
      }else if(upper == true && numbers == false && special == false){
        const letters = [].concat(alphabetcharLower, alphabetcharUpper);
        for(i = 0; i < long; i++){
          password = password + letters[Math.floor(Math.random() * (letters.length))];
        }
      }else if(upper == false && numbers == true && special == false){
        const lowerNum = [].concat(alphabetcharLower, NumChar);

        for(i = 0; i < long; i++){
          password = password + lowerNum[Math.floor(Math.random() * (lowerNum.length))];
        }
      }else if(upper == false && numbers == false && special == true){
        const lowerSpec = [].concat(alphabetcharLower, specialChar);

        for(i = 0; i < long; i++){
          password = password + lowerSpec[Math.floor(Math.random() * (lowerSpec.length))];
        }
      }else if(upper == true && numbers == true && special == false){
        const lettersNum = [].concat(alphabetcharLower, alphabetcharUpper, NumChar);

        for(i = 0; i < long; i++){
          password = password + lettersNum[Math.floor(Math.random() * (lettersNum.length))];
        }
      }else if(upper == false && numbers == true && special == true){
        const lownumSpec = [].concat(alphabetcharLower, NumChar, specialChar);

        for(i = 0; i < long; i++){
          password = password + lownumSpec[Math.floor(Math.random() * (lownumSpec.length))];
        }
      }else if(upper == true && numbers == false && special == true){
        const lowupSpec = [].concat(alphabetcharLower, alphabetcharUpper, special);

        for(i = 0; i < long; i++){
          password = password + lowupSpec[Math.floor(Math.random() * (lowupSpec.length))];
        }
      }
    }else if (upper == true){
      if(lower == false && numbers == false && special == false){
        for(i = 0; i < long; i++){
          password = password + alphabetcharUpper[Math.floor(Math.random() * (alphabetcharUpper.length))];
        }
      }else if(lower == false && numbers == true && special == false){
        const upperNum = [].concat(alphabetcharUpper, NumChar);

        for(i = 0; i < long; i++){
          password = password + upperNum[Math.floor(Math.random() * (upperNum.length))];
        }
      }else if(lower == false && numbers == false && special == true){
        const upperSpec = [].concat(alphabetcharUpper, specialChar);

        for(i = 0; i < long; i++){
          password = password + upperSpec[Math.floor(Math.random() * (upperSpec.length))];
        }
      }else if(lower == false && numbers == true && special == true){
        const upnumSpec = [].concat(alphabetcharUpper, NumChar, specialChar);

        for(i = 0; i < long; i++){
          password = password + upnumSpec[Math.floor(Math.random() * (upnumSpec.length))];
        }
      }
    }else if(numbers == true){
      if(lower == false && upper == false && special == false){
        for(i = 0; i < long; i++){
          password = password + NumChar[Math.floor(Math.random() * (NumChar.length))];
        }
      }else if(lower == false && upper == false && special == true){
        const specNum = [].concat(NumChar, specialChar);

        for(i = 0; i < long; i++){
          password = password + specNum[Math.floor(Math.random() * (specNum.length))];
        }
      }
    }else if(special == true){
      for(i = 0; i < long; i++){
        password = password + specialChar[Math.floor(Math.random() * (specialChar.length))];
      }
    }
  }

  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
