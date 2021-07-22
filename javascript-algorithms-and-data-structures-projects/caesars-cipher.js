function rot13(str) {
    var arr = str.toUpperCase().split("").map(function(char) {
      if (char.charCodeAt() > 64 && char.charCodeAt() < 91) {
        if(char.charCodeAt() > 77) { 
          return String.fromCharCode(char.charCodeAt() - 13)
        }
        return String.fromCharCode(char.charCodeAt() + 13);
      }
      return char;
    }).join("");
    
    return arr;
  }
  
  //FREE CODE CAMP
  rot13("SERR PBQR PNZC");
  //THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG
  rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.")