// Adding/Removing Elements

//push - adds elements to the end(mutates original array)
const fruits = ['apple', 'banana']
fruits.push('orange');  // return 3 (new length)
console.log(fruits)

//pop - removes the last element (mutates original array)
const lastFruit = fruits.pop(); //returns 'orange'
console.log(fruits)    // ['apple', 'banana']

//unshift - adds elements to beginning (mutates original array)
fruits.unshift(); //returns 3 (new length)
console.log(fruits)    // ['mango','apple', 'banana']

//shift - removes the first element (mutates original array)
fruits.unshift(); //returns 'mango'
console.log(fruits)    // ['mango','apple']

//splice - add/removes elements from any position (mutates original array)
const numbers = [1,2,3,4,5];
numbers.splice(2,1,'a','b') //remove 1 element at index 2, adds 'a' and 'b'
console.log(numbers)

// Accessing Elements
const letters = ['a', 'b', 'c', 'd'];

//at - returns element at specified index (supports negative indices)
console.log(letters.at(1))   //b
console.log(letters.at(-1))  //d (last element)

//slice - returns a new array with extracted portion
console.log(letters.slice(1,3)) // ['b','c']


// searching and filtering

const nums = [10,20,30,40,50]

//indexOf - finds first index of an element
console.log(nums.indexOf(20))   //1
console.log(nums.indexOf(20,2)) //4 (start from index 2)

// lastIndexOf - finds last index of an element
console.log(nums.lastIndexOf(20));  //4

//includes - checks if array contains an element
console.log(nums.includes(20))  //true

//findIndex - returns index of first element that satisfies condition
console.log(nums.findIndex(n => n > 25)); //2

//filter - returns a new array with all elements that satisfy condition
console.log(nums.filter(n => n > 20)) // [30,40]

// Transformation

const numbers1 = [1,2,3,4,5]

//map - creates new array by transforming each element
const doubled =  numbers1.map(n => n*2)
console.log(doubled)  // [2,4,6,8]

// flatMap - map followed by flat
const pairs =  numbers1.flatMap(n => [n, n * 2])
console.log(pairs)   // [1,2,2,4,3,6,4,8]

// reduce - reduce array to a single value
const sum = numbers1.reduce((acc,curr) => acc + curr, 0)
console.log(sum) //10

//flat -  flattens nested arrays
const nested = [1,[2, [3,4]]]
console.log(nested.flat())  // [1,2,[3,4]]
console.log(nested.flat())  // [1,2,3,4]

// sorting and reversing

const letters1 = ['c','a','b']

//sort - sorts the array (mutates original array)
letters1.sort()
console.log(letters1) // ['a','b','c']

//reverse - reverses the array (mutates original array)
letters.reverse()
console.log(letters1) // ['c','b','a']

//custom sorting with numbers
const numbers2 = [40, 1, 5, 200]
numbers2.sort((a,b) => a-b)   //ascending
console.log(numbers2)  //[1,5,40,200]

//Iteration

const fruits1 = ['apple', 'banana', 'cherry']

// forEach - executes function for each element
fruits.forEach((fruit, index) => {
    console.log(`${index}: ${fruit}`)
})

//0 : apple
//1 : banana

//some - tests if atleast one element passes the test
console.log(fruits.some(fruit => fruit.startsWith('a'))) //true

// every - tests if all elements pass the test
console.log(fruits.every(fruit => fruit.length > 3))  //true

//other  usefull methods

//join - creates a string from array
const fruits3 = ['apple','banana','cheery']
console.log(fruits3.join(', ')) // "apple, banana, cherry"

//concat - combines arrays
const arr1  = [1,2]
const arr2  = [3,4]
console.log(arr1.concat(arr2))  // [1,2,3,4]

//fill - fills elements with a static value (mutates original array)
const arr = [1,2,3,4]
console.log(arr.fill(0,1,3))  //[1,0,0,4]

//Array.isArray - checks if value is an array
console.log(Array.isArray([]))  //true
console.log(Array.isArray('isArray'))  //false