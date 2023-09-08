/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function reverse(str){
  var ans = "";
  for(let i=str.length-1; i>=0; i--){
    ans += str[i];
  }
  return ans;
}

function transform(str){
  var ans = "";
  for(let i=0; i<str.length; i++){
    if(str[i]===" " || str[i]==="," || str[i]==="?" || str[i]==="!" || str[i]==="."){ 
      continue;
    }
    else ans += str[i];
  }
  return ans;
}


function isPalindrome(str) {
  str = str.toLowerCase();
  str = transform(str);
  let reverseStr = reverse(str);
  
  if(reverseStr === str) return true;
  return false;
}

module.exports = isPalindrome;
