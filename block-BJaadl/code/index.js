let words = [
    'mystery',
    'brother',
    'aviator',
    'crocodile',
    'pearl',
    'orchard',
    'crackpot',
    'rhythm',

];

// - Write a function findLongestWord that takes an array of words and returns the longest word from the array. (Use above array "words" to test it). If there are 2 with the same length, it should return the first occurrence.
function findLongestWord(arr) {
    return [...arr].sort((a, b) => a.length - b.length).pop();
}

// - Convert the above array "words" into an array of length of word instead of word.

let length = words.map((a) => a.length);
console.log(length);

// - Create a new array that only contains word with atleast one vowel.
let vowels = words.filter((words) => {
    var words = words.toLowerCase()
    if (words.includes("a") ||
        words.includes("e") ||
        words.includes("i") ||
        words.includes("0") ||
        words.includes("u")) {
        return true
    } else {
        return false
    }
})

// - Find the index of the word "rhythm"
console.log(words.indexOf("rhythm"))

// - Create a new array that contians words not starting with vowel.
let startVowels = words.filter((words) => {
    var words = words[0].toLowerCase()
    if (words.includes("a") ||
        words.includes("e") ||
        words.includes("i") ||
        words.includes("0") ||
        words.includes("u")) {
        return true
    } else {
        return false
    }
})

// - Create a new array that contianse words not ending with vowel
let endVowels = words.filter((words) => {
    var words = words[words.length - 1].toLowerCase()
    if (words.includes("a") ||
        words.includes("e") ||
        words.includes("i") ||
        words.includes("0") ||
        words.includes("u")) {
        return true
    } else {
        return false
    }
})

let numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

// - Create a sumArray function that takes an array of number as a parameter, and calculate the sum of all its numbers
function sumArray(num) {
    return num.reduce((a, b) => a + b, 0);
}

// - Make a new array that contains number multiplied by 3 like [6, 18, 27 ...]
let multipliedBy3 = numbers.map((numbers => numbers * 3))

// - Create a new array that contains only even numbers
let evenNumber = numbers.filter((numbers) => numbers % 2 == 0);

// - Create  a new array that contains only odd numbers.
let oddNumber = numbers.filter((numbers) => numbers % 2 !== 0);

// - Create a new array that should have true for even number and false for odd numbers.
let oddOrEven = numbers.map((numbers) => numbers % 2 === 0);

// - Sort the above number in assending order.
numbers.sort((a, b) => a - b)

// - Does sort mutate the original array?
// Yes it mutates the original arrray.

// - Find the sum of the numbers in the array.
numbers.reduce((acc, cv) => acc + cv);

//- Write a function averageNumbers that receives an array of numbers and calculate the average of the numbers

let strings = [
    'seat',
    'correspond',
    'linen',
    'motif',
    'hole',
    'smell',
    'smart',
    'chaos',
    'fuel',
    'palace',
];

function averageNumbers(array) {
    let length = array.length;
    let total = array.reduce((acc, cv) => acc + cv);
    return total / length;
}


// - Write a function averageWordLength that receives an array of words2 and calculate the average length of the words.
function averageWordLength(words) {
    let wordsLength = words.map((numbers) => numbers.length).reduce((acc, cv) => acc + cv);
    return wordsLength;
}