// Karatsuba Multiplication Algorithm
/* In this programming assignment you will implement one or more of the integer multiplication algorithms described in lecture.

To get the most out of this assignment, your program should restrict itself to multiplying only pairs of single-digit numbers.  You can implement the grade-school algorithm if you want, but to get the most out of the assignment you'll want to implement recursive integer multiplication and/or Karatsuba's algorithm.

So: what's the product of the following two 64-digit numbers?

3141592653589793238462643383279502884197169399375105820974944592

2718281828459045235360287471352662497757247093699959574966967627

[TIP: before submitting, first test the correctness of your program on some small test cases of your own devising. Then post your best test cases to the discussion forums to help your fellow students!]

[Food for thought: the number of digits in each input number is a power of 2.  Does this make your life easier?  Does it depend on which algorithm you're implementing?]

The numeric answer should be typed in the space below.  So if your answer is 1198233847, then just type 1198233847 in the space provided without any space / commas / any other punctuation marks.

(We do not require you to submit your code, so feel free to use any programming language you want --- just type the final numeric answer in the following space.)
*/

// take two integers that are very large and multiply them together without using the grade school algorithm
// Should run in linear time
// Can use recursion

// I: two integers
// O: Product of those integers
// C: Linear time complexity, integer length will be powers of two
// E: If one of the integers is zero just skip to the end -> answer is zero

const karatsuba = (intOne, intTwo) => {
  intOne = intOne.toString();
  intTwo = intTwo.toString();
  // split our integers into pieces a, b, c, d
  const alpha = Number(intOne.slice(0, Math.floor(intOne.length / 2)));
  const bravo = Number(intOne.slice(Math.floor(intOne.length / 2)));
  const charlie = Number(intTwo.slice(0, Math.floor(intTwo.length / 2)));
  const delta = Number(intTwo.slice(Math.floor(intTwo.length / 2)));

  // comppute a * c
  const alphaCharlie = alpha * charlie;
  console.log(`Step One: ${alphaCharlie}`);
  const aCLength = alphaCharlie.toString().length;
  // compute b * d
  const bravoDelta = bravo * delta;
  const bDLength = bravoDelta.toString().length;
  console.log(`Step Two: ${bravoDelta}`);
  // compute (a + b)(c + d)
  const alphaBravoCharlieDelta = (alpha + bravo) * (charlie + delta);
  console.log(`Step Three: ${alphaBravoCharlieDelta}`);
  // compute (a * c) - (b * d) - (a+b)(c+d)
  const stepFour = alphaBravoCharlieDelta - bravoDelta - alphaCharlie;
  console.log(`Step Four: ${stepFour}`);
  // pad the first number with enough zeroes to where the length is equal to the number of 10s place of both digits -> e.g. there are 8 digits so multiple a * c by 10 ^ (total digits - length of a * c - 1)
  const grossLength = intOne.toString().length + intTwo.toString().length;
  console.log(`Length of new number, ${grossLength}`);
  const sumOne = alphaCharlie * (10 ** (grossLength - aCLength - 1));
  console.log(`Step Five part 1: ${sumOne}`);
  const sumThree = stepFour * (10 ** (Math.floor((grossLength - aCLength - 1) / 2)));
  console.log(`Step Five part 2: ${bravoDelta}`);
  console.log(`Steph Five part three: ${sumThree}`);
  // don't pad the middle number
  return sumOne + bravoDelta + sumThree;
  // pad the third number with half the number of zeroes of the first number

  // return the sum of the three numbers




  //console.log(`Alpha: ${alpha}, Bravo: ${bravo}, Charlie: ${charlie}, Delta: ${delta}`);
}

const promptIntegers = [3141592653589793238462643383279502884197169399375105820974944592, 2718281828459045235360287471352662497757247093699959574966967627];

const testOne = [1234, 5678];
const testTwo = [12345, 678];

// console.log("Multiply the numbers the simple way", promptIntegers[0] * promptIntegers[1]);
//console.log(`Test one: ${testOne[0] * testOne[1]}`);
// console.log(karatsuba(testOne[0], testOne[1]));

// console.log(`testTwo: ${testTwo[0] * testTwo[1]}`);
// console.log("Test Two", karatsuba(testTwo[0], testTwo[1]));

karatsuba(promptIntegers[0], promptIntegers[1]);