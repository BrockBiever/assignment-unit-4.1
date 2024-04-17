console.log('***** Function Practice *****');

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName(name) {
  return 'Hello, Brock!';
} console.log(helloName())
// Remember to call the function to test


// 3. Function to add two numbers together & return the result

function addNumbers(firstNumber, secondNumber) {
 

  return firstNumber+secondNumber ; }
  console.log(addNumbers(1.6, 3.4))
  // return firstNumber + secondNumber;



// 4. Function to multiply three numbers & return the result
function multiplyThree(multi1,multi2,multi3) { 
  
  return multi1*multi2*multi3 ;

} console.log(multiplyThree(6.2345, 8.5028, 3.7149))


// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive(number) {
  if (number > 0) {
    return;
  }
  return;};

function TrueandFalse(number) { 
  
  if (number >= 0) {
    true; console.log('number is true')
  }
  else{
    false; console.log('number is false')
  } 
  return  ;
} console.log(TrueandFalse(1))
// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome


// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
let array1= ['first', 'mid']
function getLast(lastValue) {
array1.push(lastValue)};
; getLast('last')
getLast('last last')
console.log(array1)

// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
function find(value, array) {

}
let sentence = [ 'I', 'think', 'I did', 'this', 'correctly']; 
function findValue(placeHolderArray){
  for(A=0; A<placeHolderArray.length ; A++ );
if (placeHolderArray[0]){
  true; console.log( placeHolderArray[0], 'true')
}
  else{ false; console.log('No Value')
  };


} findValue(sentence);

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
 if (string.indexof(letter)=letter){
   ;console.log('true'); return true;
}
else ; console.log('false'); return false;
} 
let string1=('A')
isFirstLetter('A', string1)

// 9. Function to return the sum of all numbers in an array
let arrayForSum=[56, 78, 49, 91, 83];
function sumAll(array) {
  let sum=0 ;
  for(let B=0; B < array.length ; B++){
    sum+= array[B] ; 
  };
 console.log(sum);
 return sum;
  
  // TODO: loop to add items

  // TODO: return the sum
}  sumAll(arrayForSum)

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
let arrayb=[0,5,6,7,-9,6,0];
function allPositive(arr){
let positiveCount; positiveCount=0
let size= arr.length;
for(let r=0; r< arr.length;r++ );
if(arr[r]>0){
positiveCount++} ;
console.log(positiveCount)
return(positiveCount);
}
allPositive(arrayb)



// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!


// DO NOT MODIFY
// Used for automated testing
try {
  module.exports = {
    hello,
    helloName,
    addNumbers,
    multiplyThree,
    isPositive,
    getLast,
    find,
    isFirstLetter,
    sumAll,
    allPositive,
  };
} catch (e) {
  // Do nothing
}
