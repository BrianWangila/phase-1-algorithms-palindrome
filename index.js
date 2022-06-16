function isPalindrome(word) {
  // Write your algorithm here
  const lowercase = word.toLowerCase();
  const reversedWord = lowercase.split("").reverse().join("");
  if (lowercase === reversedWord) {
    return true;
  }else{
    return false;
  }
}


/* 
  Add your pseudocode here
  Input: a string
  Output: boolean
  Steps to solve the problem:
  1. convert the string to lowercase
  2. reverse the string
  3. compare the reversed string to the original string
*/

/*
  Add written explanation of your solution here
  I used the reverse method to reverse the string.

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
