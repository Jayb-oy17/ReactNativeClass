// Exercise One

// 1
let challenge = "30 Days Of JavaScript";

// 2
console.log(challenge);

// 3
console.log(challenge.length);

// 4
console.log(challenge.toUpperCase());

// 5
console.log(challenge.toLowerCase());

// 6
console.log(challenge.substring(0, 2)); // '30'

// 7
console.log(challenge.substring(3)); // 'Days Of JavaScript'

// 8
console.log(challenge.includes("Script")); // true

// 9
console.log(challenge.split("")); // array of characters

// 10
console.log(challenge.split(" ")); // ['30','Days','Of','JavaScript']

// 11
let companies = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
console.log(companies.split(", "));

// 12
console.log(challenge.replace("JavaScript", "Python"));

// 13
console.log(challenge.charAt(15)); // 'S'

// 14
console.log(challenge.charCodeAt(challenge.indexOf("J")));

// 15
console.log(challenge.indexOf("a"));

// 16
console.log(challenge.lastIndexOf("a"));

// 17
let sentence =
  "You cannot end a sentence with because because because is a conjunction";
console.log(sentence.indexOf("because"));

// 18
console.log(sentence.lastIndexOf("because"));

// 19
console.log(sentence.search("because"));

// 20
let spaced = " 30 Days Of JavaScript ";
console.log(spaced.trim());

// 21
console.log(challenge.startsWith("30")); // true

// 22
console.log(challenge.endsWith("JavaScript")); // true

// 23
console.log(challenge.match(/a/g));

// 24
console.log("30 Days Of".concat(" JavaScript"));

// 25
console.log(challenge.repeat(2));

// Exercise 2

// 1
console.log(
  "The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.",
);

// 2
console.log(
  "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same — with charity you give love, so don't just give money but reach out your hand instead.",
);

// 3
console.log(typeof "10" === typeof 10); // false
console.log(Number("10") === 10); // true

// 4
console.log(parseFloat("9.8") === 10); // false
console.log(Math.ceil(parseFloat("9.8")) === 10); // true

// 5
console.log("python".includes("on") && "jargon".includes("on")); // true

// 6
let text = "I hope this course is not full of jargon";
console.log(text.includes("jargon")); // true

// 7
console.log(Math.floor(Math.random() * 101)); // 0–100

// 8
console.log(Math.floor(Math.random() * 51) + 50); // 50–100

// 9
console.log(Math.floor(Math.random() * 256)); // 0–255

// 10
let js = "JavaScript";
console.log(js[Math.floor(Math.random() * js.length)]);

// 11
console.log(
  `1 1 1 1 1
2 1 2 4 8
3 1 3 9 27
4 1 4 16 64
5 1 5 25 125`,
);

// 12
console.log(sentence.substr(sentence.indexOf("because"), 23));

// Exercise 3

// 1
let loveSentence =
  "Love is the best thing in this world. Some found their love and some are still looking for their love.";
console.log(loveSentence.match(/love/gi).length);

// 2
console.log(sentence.match(/because/g).length);

// 3
const dirtySentence =
  "%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. The@re $is no@th@ing;";
let cleanText = dirtySentence.replace(/[^a-zA-Z\s]/g, "");
let words = cleanText.toLowerCase().split(" ");

let frequency = {};
for (let word of words) {
  frequency[word] = (frequency[word] || 0) + 1;
}

console.log(frequency);

// most frequent word
let mostFrequent = Object.entries(frequency).sort((a, b) => b[1] - a[1])[0];
console.log(mostFrequent);

// 4
let incomeText =
  "He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.";
let numbers = incomeText.match(/\d+/g).map(Number);

let totalAnnualIncome = numbers[0] * 12 + numbers[1] + numbers[2] * 12;

console.log(totalAnnualIncome);