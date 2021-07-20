function palindrome(str) {
    let arr = str.toLowerCase().replace(/\W|_/g, "").split("");
    while(arr.length > 1){
      if (arr[0] !== arr[arr.length-1]) return false;
      arr.pop();
      arr.shift();
    }
    return true;
}

console.log(palindrome("A man, a plan, a canal. Panama"));
console.log(palindrome("0_0 (: /-\ :) 0-0"));