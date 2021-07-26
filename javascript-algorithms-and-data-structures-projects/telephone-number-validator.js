function telephoneCheck(str) {
    /*  ^1?\s?                              Optional US country code and space
        (\d{3}|\(\d{3}\))                   3 digits or 3 digits with param
        (\-|\s)?                            Optional dash
     */
    var re = /^1?\s?(\d{3}|\(\d{3}\))(\-|\s)?(\d{7}|\d{3}\-\d{4}|\d{3}\s\d{4})$/;
    var valid = re.exec(str);
    if (valid) return true; else return false;
  }
  //true
  telephoneCheck("555-555-5555");
  telephoneCheck("1(555)555-5555");
  telephoneCheck("1 456 789 4444");
  //false
  telephoneCheck("(555)5(55?)-5555");
  telephoneCheck("(555-555-5555");
  telephoneCheck("55 55-55-555-5");
