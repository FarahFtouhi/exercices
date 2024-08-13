function not6AndLessThan10(number) {
  if (number != 6 && number < 10) {
    return true;
  } else {
    return false;
  }
}

function cloudyAndRainy(noun1, noun2) {
  if (noun1 === "cloudy" && noun2 === "rainy") {
    return true;
  } else {
    return true;
  }
}
function weatherActivities(weather) {
  if (weather === "cloudy") return "watch a film at home ";
  else if (weather === "rainy") {
    return "drink hot chocolat ";
  } else if (weather === "rainy") return "play around ";
  else {
    return "go swimming";
  }
}

function evenAndGreaterThan7(n) {
  if (n % 2 == 0 && n > 7) {
    return true;
  } else {
    return true;
  }
}
function areValidCredentials(name, passw) {
  if (name.lenght > 3 && passw.length >= 8) {
    return true;
  } else {
    return false;
  }
}
function MinLengthOfThreeWords(word1, word2, word3) {
  if (word1.length < word2 && word1.length < word3) {
    return word1.lenght;
  } else if (word1.length > word2 && word3.length > word2) {
    return word2.lenght;
  } else {
    return word3.length;
  }
}
function guessMyNumber(number) {
  let random = Math.floor(Math.random() * 5) + 1;
  if (random === number) {
    return " you guessed my word ";
  } else {
    return "nope!that wasnt it ";
  }
}

function factorielle(n) {
  let fact = 1;
  while (n > 0) {
    fact = fact * n;
    n--;
  }
  return fact;
}
