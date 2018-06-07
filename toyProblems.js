//JS Basics
//Run npm test in the command line to test your solutions
module.exports = {
  reverseIt: (str) => {
    console.log(str)
    return str.split('').reverse().join('');
  },

  //uncomment and finish the reverseIt function. It will take in one parameter which is a String and
  //reverse it

  removeDups: (arr) => {
    // loop through the arr
    // push it to the new arr and check the index
    let newArr = [];
    arr.forEach((item, i) => {
      if (newArr.indexOf(item) === -1) {
        newArr.push(item);
      }
    })

    return newArr;
  },

  //uncomment and finish the removeDups function. It will take in one parameter which is an Array
  //remove all duplicates

  titleIt: (str) => {
      let wordsArr = str.split(' ');
      let upperCased = wordsArr.map((item, i) => {
        let rest = item.slice(1)
        return item[0].toUpperCase() + rest;
      })
      return upperCased.join(' ');
  },

  //uncomment and finish the titleIt function. It will take in one parameter which is a String and
  //capitalize the first letter of each word

  vowelCounter: (str) => {
    let vowels = ['a', 'e', 'o', 'i', 'u'];

    let total = 0;

    let arr = str.split('');
    arr.forEach(vowel => {
      if (vowels.indexOf(vowel) !== -1) {
        total++;
      }
    })
    return total;
  },

  //uncomment and finish the vowelCounter function. It will take in one parameter which is a String and
  //return the number of vowels in the string

   isPrime: (num) => {
    if (num < 1) {
      return false 
    };
    
    for (var i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  },

  //uncomment and finish the isPrime function. It will take in one parameter which is a Number and
  //return true if it is prime and false if it is not

  //what is the value of foo?
  //var foo = 10 + '20';
  //uncomment the foo property and give your answer as its value

  foo:  "1020",

  //what is the outcome of the two console.logs below?
  //   var foo = "Hello";
  // (function() {
  //   var bar = " World";
  //   console.log(foo + bar);
  // })();
  // console.log(foo + bar);
  // uncomment the log1 and log2 properties and give your answers as their values

  log1: "Hello World",
  log2: undefined
  
}
