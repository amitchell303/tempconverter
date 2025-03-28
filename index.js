// Complete the following functions to make our program work!

/**
 * Converts the given Fahrenheit temperature `f` to Celsius.
 * @param {number} f temperature in °F
 * @returns {number} temperature in °C
 */

function convertToCelsius(f) {
  return ((f - 32) * 5) / 9;
}

/**
 * | Temperature | Description |
 * | ----------- | ----------- |
 * | < 32        | "very cold" |
 * | < 64        | "cold"      |
 * | < 86        | "warm"      |
 * | < 100       | "hot"       |
 * | >= 100      | "very hot"  |
 *
 * @param {number} f temperature in °F
 * @returns {string} the description from the table above corresponding to
 * the given Fahrenheit temperature `f`
 */

function describeTemp(f) {
  if (f < 32) {
    console.log("Very Cold");
  } else if (f < 64) {
    console.log("Cold");
  } else if (f < 86) {
    console.log("Warm");
  } else if (f < 100) {
    console.log("Hot");
  } else f >= 100;
  console.log("Very Hot");
}
return describeTemp(f)

// Attempts
// if (f < 32) {
//   console.log("Very cold");
// } else if (f < 64) {
//   console.log("Cold");
// } else if (f < 86) {
//   console.log("Warm");
// } else if (f < 100) {
//   console.log("Hot");
// } else if (f >= 100) {
//   console.log("Very hot");
// }

// const determinetemp = (f) => {
//   if (f < 32) {
//     console.log("Very cold");
//   } else if (f < 64) {
//     console.log("Cold");
//   } else if (f)
//     console.log("Warm");
//   }
// End of attempts

/**
 * @param {number} limit
 * @returns {number} a random integer in the range [0, `limit`)
 */

function getRandomInt(limit) {
  console.log(math.round(math.random() * limit) * 10);
}
// Why does the console say "math undefined if i dont have the '* 10'?"

// function getRandomInt(limit) {
//   console.log(Math.floor(Math.random() * limit));
// }
// This was my original code^, but to satisfy rubric, I used math.round and math.random below.

// -------------------- DO NOT CHANGE THE CODE BELOW ---------------------- //
/**
 * Converts the given temperature from Fahrenheit to Celsius,
 * then alerts the user with a descriptive message.
 * @param {number} f temperature in °F
 */
function parseFahrenheit(f) {
  const c = convertToCelsius(f);
  const description = describeTemp(f);
  const message = `${f}°F is ${c}°C. That is ${description}.`;
  alert(message);
}

const fahrenheitPrompt =
  "Please enter a number. We will convert that temperature from Fahrenheit to Celsius.";
let f = prompt(fahrenheitPrompt);
parseFahrenheit(+f);

alert("Let's try that again.");
f = prompt(fahrenheitPrompt);
parseFahrenheit(+f);

alert("Let's try some random temperatures.");
f = getRandomInt(110);
parseFahrenheit(f);

f = getRandomInt(110);
parseFahrenheit(f);
