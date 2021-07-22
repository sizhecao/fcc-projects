//The largest number that can be represented in this notation is 3,999 (MMMCMXCIX)

function convertToRoman(num) {
    var numArr = num.toString().split("").reverse();
    //ones
    if (numArr[0]) {
      switch (numArr[0]) {
        case "1":
          numArr[0] = "I";
          break;
        case "2":
          numArr[0] = "II";
          break;
        case "3":
          numArr[0] = "III";
          break;
        case "4":
          numArr[0] = "IV";
          break;
        case "5":
          numArr[0] = "V";
          break;
        case "6":
          numArr[0] = "VI";
          break;
        case "7":
          numArr[0] = "VII";
          break;
        case "8":
          numArr[0] = "VIII";
          break;
        case "9":
          numArr[0] = "IX";
          break;
      }
    }
    //tens
    if (numArr[1]) {
      switch (numArr[1]) {
        case "1":
          numArr[1] = "X";
          break;
        case "2":
          numArr[1] = "XX";
          break;
        case "3":
          numArr[1] = "XXX";
          break;
        case "4":
          numArr[1] = "XL";
          break;
        case "5":
          numArr[1] = "L";
          break;
        case "6":
          numArr[1] = "LX";
          break;
        case "7":
          numArr[1] = "LXX";
          break;
        case "8":
          numArr[1] = "LXXX";
          break;
        case "9":
          numArr[1] = "XC";
          break;
      }
    }
    //hundreds
    if (numArr[2]) {
      switch (numArr[2]) {
        case "1":
          numArr[2] = "C";
          break;
        case "2":
          numArr[2] = "CC";
          break;
        case "3":
          numArr[2] = "CCC";
          break;
        case "4":
          numArr[2] = "CD";
          break;
        case "5":
          numArr[2] = "D";
          break;
        case "6":
          numArr[2] = "DC";
          break;
        case "7":
          numArr[2] = "DCC";
          break;
        case "8":
          numArr[2] = "DCCC";
          break;
        case "9":
          numArr[2] = "CM";
          break;
      }
    }
    //thousands
    if (numArr[3]) {
      switch (numArr[3]) {
        case "1":
          numArr[3] = "M";
          break;
        case "2":
          numArr[3] = "MM";
          break;
        case "3":
          numArr[3] = "MMM";
          break;
      }
    }
    var roman = numArr.reverse().join("").replaceAll('0','');
    return roman;
  }
  
  //XXIX
  convertToRoman(29);
  //DCCCXCI
  convertToRoman(798)
  //M
  convertToRoman(1000);
  //MMMCMXCIX
  convertToRoman(3999)