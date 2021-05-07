// Karatsuba Multiplication Algorithm

// take two integers that are very large and multiply them together without using the grade school algorithm
// Should run in linear time
// Can use recursion

// I: two integers
// O: Product of those integers
// C: Linear time complexity, integer length will be powers of two
// E: If one of the integers is zero just skip to the end -> answer is zero

const karatsuba = (intOne, intTwo) => {

}

const integerOne = 3141592653589793238462643383279502884197169399375105820974944592;
const integerTwo = 2718281828459045235360287471352662497757247093699959574966967627;

console.log("Multiply the numbers the simple way", integerOne * integerTwo);

console.log("Multiply the numbers with Karatsuba multiplication", karatsuba(integerOne, integerTwo));