/* activity 1: Variable Declaration */
/* Task 1: Declare a variable using var, assign it a number, and log the value to the console. */
console.log('\n---- activity 1 - task 1 ----');
var someNumber = 8;
console.log(someNumber);

/* activity 1 */
/* Task 2: Declare a variable using let, assign it a string, and log the value to the console. */
console.log('\n---- activity 1 - task 2 ----');
let someString = 'some string';
console.log(someString);

/* activity 2: Constant Declaration */
/* Task 3: Declare a variable using const , assign it a boolean value, and log the value to the console. */
console.log('\n---- activity 2 - task 3 ----');
const isTrue = true;
console.log(isTrue);

/* activity 3: Data Types */
/* Task 4: Create variables of different data types (number, string, boolean, object, array) and log each variable's type using the typeof operator. */
console.log('\n---- activity 3 - task 4 ----');
const arr = [1, 2, 3];
const obj = { key1: 'value1' };
const anotherNumber = 15;
const anotherString = 'another string';
const anotherBoolean = false;
console.log('type of array => ', typeof arr);
console.log('type of object => ', typeof obj);
console.log('type of number => ', typeof anotherNumber);
console.log('type of string => ', typeof anotherString);
console.log('type of boolean => ', typeof anotherBoolean);

/* activity 4: Reassigning Variables */
/* Task 5: Declare a variable using let , assign it an initial value, reassign a new value, and log both values to the console. */
console.log('\n---- activity 4 - task 5 ----');
let changingValue = 8;
console.log('before update => ', changingValue);
changingValue = 15;
console.log('after update => ', changingValue);

/* activity 5: Understanding const */
/* Task 6: Try reassigning a variable declared with const and observe the error. */
console.log('\n---- activity 5 - task 6 ----');
const someConstant = 8;
someConstant = 15; /* error expected */
