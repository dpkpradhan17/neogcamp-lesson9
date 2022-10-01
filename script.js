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
