function shout(string) {
  return string.toUpperCase();
}

function whisper(string) {
  return string.toLowerCase();
}

function logShout(string) {
  var uppercase = "HELLO";
  console.log("HELLO");
}

function logWhisper(string) {
  var lowercase = "hello";
  console.log("hello");
}

function sayHiToGrandma(string) {
  var lowerCase = 'hello';
  var upperCase = 'HELLO';
  var mixedCase = "I love you, Grandma.";
  if(string.logWhisper() === lowerCase) {
    return ("I can\'t hear you!");
  }
  if(string.logShout() === upperCase) {
    return ("YES INDEED!");
  }
  if (string.logWhisper() || string.logShout() === mixedCase) {
    return ("I love you, too.");
  }
}
/*
function sayHiToGrandma(string) {
  var upperCase = "HELLO";
  if(upperCase.toUpperCase() === upperCase) {
    return ("YES INDEED!");
  }
}
function sayHiToGrandma(string) {
  var mixedCase = "I love you, Grandma.";
  if (mixedCase.toUpperCase() || mixedCase.toLowerCase() === mixedCase) {
    return ("I love you, too.");
  }
}
*/
