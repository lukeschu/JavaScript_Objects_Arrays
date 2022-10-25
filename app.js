console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

const numbers = [2, 22, 12, 17, 18, 39, 129];

function arraySum(arr) {
  let sum = 0;
  arr.forEach((num) => {
    sum += num;
  });
  return sum;
}

console.log(`The sum of the array is ${arraySum(numbers)}`);

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

let favBook = {};

favBook.title = "A Confederacy of Dunces";
favBook.author = "John Kennedy Toole";
favBook.pages = 405;
favBook.readnum = 3;
favBook.info = function () {
  return `My favorite book is ${this.title} by ${this.author}. It's ${this.pages} pages long, and I've read it ${this.readnum} times.`;
};

console.log(favBook.info());

function info() {
  return `My favorite book is ${this.title} by ${this.author}. It's ${this.pages} pages long, and I've read it ${this.readnum} times.`;
}

let favBook2 = {
  title: "Fear and Loathing in Las Vegas",
  author: "Hunter S. Thompson",
  pages: 189,
  readnum: 3,
  info,
};

console.log(favBook2.info());
// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");
let example = "The quick brown fox jumps over the lazy dog";
function reverseWords(sentence) {
  let words = sentence.split(" ");
  let result = [];
  for (let i = 0; i < words.length; i++) {
    let letters = words[i].split("");
    letters.reverse();
    let reverseWord = letters.join("");
    result.push(reverseWord);
  }
  return result.join(" ");
}

console.log(reverseWords(example));
// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");
let csvData = "name,age\nFrodo,50\nSam,38\nMerry,36\nPippin,26";
let rows = csvData.split("\n");
console.log(rows);
let header = rows[0].split(",");
let result = [];
console.log(header);
for (i = 1; i < rows.length; i++) {
  let obj = {};
  let data = rows[i].split(",");
  data.forEach((val, idx) => {
    obj[header[idx]] = val;
  });
  result.push(obj);
}
console.log(rows);
console.log(result);
