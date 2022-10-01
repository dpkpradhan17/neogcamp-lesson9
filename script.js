function reverseStr(str){
    var listOfChars = str.split('');
    var reverseOfListOfChars = listOfChars.reverse();
    var reversedStr= reverseOfListOfChars.join('');
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
