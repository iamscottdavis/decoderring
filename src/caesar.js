// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    
    function caesar(input, shift=0, encode = true) {
      let caesar ='';
      input.toLowerCase();
      
      if (!shift || shift == 0 || shift < -25 || shift > 25) {
        return false
      };
      
      if (encode === false) {
        shift = shift*-1
      };
      
    for (let i = 0; i < input.length; i++) {
  
        let spot = alphabet.indexOf(input[i].toLowerCase()); 
        let shifted = spot + shift;
  
        if (spot === -1) {
          caesar += input[i]
        } else if (spot !== -1 && shifted > 25) {
            caesar += alphabet[shifted-26]
          }  else if (spot !== -1 && shifted < 0) {
            caesar += alphabet[shifted+26]
          } else {
          caesar += alphabet[spot+shift]
        };
      };
      return caesar;
    }
    
  
    return {
      caesar,
    };
  })();
  
  module.exports = { caesar: caesarModule.caesar };
  