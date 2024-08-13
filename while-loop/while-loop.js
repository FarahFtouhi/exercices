//1.Write a function called sumOfN that takes a number as a parameter and returns the sum of that number and all the numbers before it.
function sumOfN(number) {
  let iterator = 1;
  let sum = 0;
  while (iterator <= number) {
    sum = sum + iterator;
    iterator = iterator + 1;
  }
  return sum;
}
//Write a function called factorialOfN that takes a whole number as a parameter and returns the factorial of that number.
function factorielle(n) {
  let fact = 1;
  while (n > 0) {
    fact = fact * n;
    n--;
  }
  return fact;
}
//Write a function called repeatString that takes two parameters, as string and a number, and returns that string the number of times specified in the second parameter.
function repeatString(str, num) {
  let result = "";
  let i = 0;
  while (i < num) {
    result += str;
    i++;
  }
  return result;
}
//Write a function called countMinMax that takes two numbers as parameters and returns the range.
function countMinMax(num1, num2) {
  let min, max, res;

  if (num1 < num2) {
    min = num1;
    max = num2;
  } else {
    min = num2;
    max = num1;
  }

  return res;
}
//Write a function called productMinToMax that takes two numbers as parameters and returns the product between the two integers beginning at the num1 and excluding num2.
function productMinToMax(number01, number02) {
  let product = 1;
  let begin = Math.min(number01, number02);
  let ending = Math.max(num1, num2);

  while (begin < ending) {
    product *= start;
    begin++;
  }

  return product;
}
//.Write a function called multiplyBy10NTimes that takes two numbers as parameters and returns the first number multiplied by 10 the amount of times indicated by the second number.

function multiplyBy10NTimes(n, times) {
  let rslt = n;
  let count = 0;

  while (count < times) {
    rslt *= 10;
    count++;
  }

  return rslt;
}

function countCharAtIndex(stri, index, searchStr) {
  if (index < 0 || index >= stri.length) {
    return 0;
  }

  let charToFind = stri[index];
  let counter = 0;
  let iterator2 = 0;

  while (iterator2 < searchStr.length) {
    if (searchStr[iterator2] === charToFind) {
      counter++;
    }
    iterator2++;
  }

  return counter;
}
//Write a function called reverseString that takes a string as an input and returns that string in reverse.
function reverseString(string5) {
  let reversed = "";
  let k = string5.length - 1;

  while (k >= 0) {
    reversed += string5[i];
    k--;
  }

  return reversed;
}
//Write a function called getIndexOf that takes two parameters, a string, and a character, and returns the first position of the character in that string.
function getIndexOf(string6, char) {
  let iter = 0;

  while (iter < string6.length) {
    if (string6[iter] === char) {
      return iter;
    }
    iter++;
  }

  return -1; //if we dont found it
}
//. Write a program that reads a character for playing the game of Rock-Paper-Scissors. If the character
//entered by the user is not one of 'P', 'R' or 'S', the
//program keeps on prompting the user to enter a new character.

function getValidInput() {
  let input = prompt("Enter 'P' for Paper, 'R' for Rock, or 'S' for Scissors:");

  while (input !== "P" && input !== "R" && input !== "S") {
    input = prompt("Invalid input. Please enter 'P', 'R', or 'S':");
  }

  return input;
}
