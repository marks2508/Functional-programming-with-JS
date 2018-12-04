console.log('JS loaded');

/*
First-Class Functions
Functions are first-class objects. Functions can be stored in variables, objects or arrays, passed as arguments to other functions or returned from functions.
*/
// stored in variable:
function doSomething() {
}

const doSomething = function() {};

// stored in property
const obj = {
  doSomething: function() {}
};

// passed as an argument
process(doSomething);

// returned from a function
function createGenerator() {
  return function() {
  };
}

// Functional array toolbox:

// Filter:
const numbers = [1,2,3,4,5,6,7,8];

function isEven(number) {
  return number % 2 === 0;
}

const evenNumbers = numbers.filter(isEven);

// A predicate function is a function that takes one value as input and returns true/false based on whether the value satisfies the condition. isEven() is a predicate function.

// map:
function toCodeOfLength(number) {
  return 'a'.repeat(number);
}
const codes = numbers.map(toCodeOfLength);

// reduce
function addNumber(total, number) {
  return total + number;
}
const sum = numbers.reduce(addNumber, 0);

// find() - returns first value that satisfies the predicate function
const firstEven = numbers.find(isEven);

// findIndex() - returns the index of the first value that satisfies the predicate function
const firstEvenIndex = numbers.findIndex(isEven);

// some() checks if at least one value in the list passes the test implemented by the predicate function
const hasOneEven = numbers.some(isEven);

// every checks if all values in the list pass the test implemented by the predicate function
const areAllEven = numbers.every(isEven);

// forEach() calls the function once for each element in an array, in order
function log(value) {
  console.log(value);
}
numbers.forEach(log);

// sort() sorts the elements of an array. It is an impure method, it modifies the input array
function ascByUserName(todo1, todo2) {
  return todo1.userName.localeCompare(todo2.userName);
}
todos.sort(ascByUserName);


/*
Closure is an inner function that has access to the outer scope, even after the outer scope has closed.
Closure becomes important when the inner function survives the execution of the outer scope. This happens in the following situations:

The inner function is used as a callback for an asynchronous task like a timer, an event, or a network call
The parent function returns the inner function or returns an object storing the inner function
*/

(function autorun() {
  let x = 1;
  ${'#btn'}.on('click', function  log() {
    console.log(x);
  });
})();
// The log() function survives the invocation of the autorun() parent function. log() is a Closure
// the variable x, used in an event handler, lives forever or until the handler is removed 
