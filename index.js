// Function for scuberGreetingForFeet
function scuberGreetingForFeet(distanceInFeet) {
  if (distanceInFeet <= 400) {
    return "This ride is free!";
  } else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
    return "That will be $20.";
  } else if (distanceInFeet > 2000 && distanceInFeet <= 2500) {
    return "That will be $30.";
  } else {
    return "Sorry, we don't offer rides over 2500 feet.";
  }
}

// Function for ternaryCheckCity
function ternaryCheckCity(city) {
  return city === "NYC" ? "Ok, sounds good." : "No go.";
}

// Function for switchOnCharmFromTip
function switchOnCharmFromTip(tipAmount) {
  switch (true) {
    case (tipAmount > 50):
      return "Thank you so much.";
    case (tipAmount > 20 && tipAmount <= 50):
      return "Thank you.";
    default:
      return "Bye.";
  }
}

// Example calls to the functions (you can remove or adjust these as needed)
console.log(scuberGreetingForFeet(300)); // "This ride is free!"
console.log(scuberGreetingForFeet(1500)); // "That will be $20."
console.log(scuberGreetingForFeet(2501)); // "Sorry, we don't offer rides over 2500 feet."

console.log(ternaryCheckCity("NYC")); // "Ok, sounds good."
console.log(ternaryCheckCity("Los Angeles")); // "No go."

console.log(switchOnCharmFrom
