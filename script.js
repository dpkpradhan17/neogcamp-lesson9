/*function reverseStr(str){
    var listOfChars = str.split("");
    var reverseOfListOfChars = listOfChars.reverse();
    var reversedStr= reverseOfListOfChars.join("");
    return reversedStr;
}

function isPalindrome(str){
    var reverse = reverseStr(str);
    return reverse === str;
}

function convertDateToStr(date){
    var dateStr = {day:'', month: '' , year: ''};
    if (date.day <10 ){
        dateStr.day = "0"+date.day;
    }
    else{
        dateStr.day= date.day.toString();
    }
    if (date.month <10 ){
        dateStr.month = "0"+date.month;
    }
    else{
        dateStr.month= date.month.toString();
    }
    dateStr.year=date.year.toString();
    return dateStr;
}

function getAllDateFormats(date){
    var dateStr = convertDateToStr(date);

    var ddmmyyyy = dateStr.day + dateStr.month +dateStr.year;
    var mmddyyyy = dateStr.month + dateStr.day + dateStr.year;
    var yyyymmdd = dateStr.year + dateStr.month + dateStr.day;
    var ddmmyy = dateStr.day + dateStr.month + dateStr.year.slice(-2);
    var mmddyy= dateStr.month + dateStr.day + dateStr.year.slice(-2);
    var yymmdd=dateStr.year.slice(-2) + dateStr.month + dateStr.day;
    return [ddmmyyyy, mmddyyyy, yyyymmdd, ddmmyy,mmddyy,yymmdd,]
}
function checkPalindromeForAllDateFormats(date){
    var listOfPalindromes = getAllDateFormats(date);
    var flag = false;
    for(var i=0;i<getAllDateFormats.length;i++){
        if(isPalindrome(listOfPalindromes[i])){
            flag =true;
            break;
        }
    }
    return flag;
}
function isLeapYear(year){
    if(year%400 ===0){
        return true;
    }
    if(year%100===0){
        return true;
    }
    if(year%4 ===0){
        return true;
    }
    return false;
}




var date={
    day: 31,month: 12, year: 2020,
}
console.log(getNextPalindromeDate(date));
*/

function reverseString(str) {
  var listOfChars = str.split('');
  var reversedListOfChar = listOfChars.reverse();
  var reversedString = reversedListOfChar.join('');
  return reversedString;
}

function isStringPalindrome(str) {
  var reversedString = reverseString(str);
  return str === reversedString;
}

function getDateAsString(date) {
  var dateInStr = { day: '', month: '', year: '' };

  if (date.day < 10) {
    dateInStr.day = '0' + date.day;
  }
  else {
    dateInStr.day = date.day.toString();
  }

  if (date.month < 10) {
    dateInStr.month = '0' + date.month;
  }
  else {
    dateInStr.month = date.month.toString();
  }

  dateInStr.year = date.year.toString();
  return dateInStr;
}

function getDateInAllFormats(date) {
  var ddmmyyyy = date.day + date.month + date.year;
  var mmddyyyy = date.month + date.day + date.year;
  var yyyymmdd = date.year + date.month + date.day;
  var ddmmyy = date.day + date.month + date.year.slice(-2);
  var mmddyy = date.month + date.day + date.year.slice(-2);
  var yyddmm = date.year.slice(-2) + date.day + date.month;

  return [ddmmyyyy, mmddyyyy, yyyymmdd, ddmmyy, mmddyy, yyddmm];
}

function checkPalindromeForAllDateFormats(date) {
  var dateFormatList = getDateInAllFormats(date);
  var palindromeList = [];

  for (var i = 0; i < dateFormatList.length; i++) {
    var result = isStringPalindrome(dateFormatList[i]);
    palindromeList.push(result);
  }
  return palindromeList;
}

function isLeapYear(year) {

  if (year % 400 === 0)
    return true;

  if (year % 100 === 0)
    return false;

  if (year % 4 === 0)
    return true;

  return false;
}

function getNextDate(date) {
  var day = date.day + 1;
  var month = date.month;
  var year = date.year;

  var daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  if (month === 2) {
    if (isLeapYear(year)) {
      if (day > 29) {
        day = 1;
        month = 3;
      }
    }
    else {
      if (day > 28) {
        day = 1;
        month = 3;
      }
    }
  }
  else {
    if (day > daysInMonth[month - 1]) {
      day = 1;
      month++;
    }
  }

  if (month > 12) {
    month = 1;
    year++;
  }

  return {
    day: day,
    month: month,
    year: year
  }
}


function getNextPalindromeDate(date) {

  var nextDate = getNextDate(date);
  var ctr = 0;

  while (1) {
    ctr++;
    var dateStr = getDateAsString(nextDate);
    var resultList = checkPalindromeForAllDateFormats(dateStr);

    for (let i = 0; i < resultList.length; i++) {
      if (resultList[i]) {
        return [ctr, nextDate];
      }
    }
    nextDate = getNextDate(nextDate);
  }
}

