// 1, how to do check the string is palindrone
// 2, how would you reverse the string
// 3, how would you capitalize the first letter of the word in a sentence
// 4, how would you count the occurence of a character in the string
// 5, how would you check if a string contains only numbers
// 6, how would you extract all numbers from a string
// 7, how would you truncate a string with an ellipsis if it exceeds a certain length
// 8, how would you implement a case-insensitive search in a string?
// 9, how would you convert a string to camelcase


//civic
// let str = "civi"
// let strReverse = str.split('').reverse().join('')
// if(str === strReverse)
// {
//    console.log('reverse')
// }
// else{
//     console.log('not reverse')
// 


// (function reverseStr(str){
//    console.log('res',[...str].reverse().join(''))
// })('test')

//first letter capitalize
// (function firstLetterCapitalize(strTest)
// {
//  console.log('result', strTest.split(' ').map((val) =>   `${val.charAt(0).toUpperCase()}${val.slice(1)}`).join(' ')) 
// })('this is my friend')

//how would you count the occurence of a character in the string
// (function countOccurence(strTest, filterStr)
// {
//  console.log('result', strTest.split(' ').filter((val) => val === filterStr).length) 
// })('This is a name and This is a name', 'name')

//5, how would you check if a string contains only numbers
// (function checkNumber(strTest)
// {
//    if(strTest.match(/\d/g))
//    {
//         console.log('contains number')
//    }
// })('This1')

//6, how would you extract all numbers from a string
// (function extractNumber(strTest){
//  console.log('test', [...strTest].filter((val) => isNaN(val)).join(''))  
// })('test123')

// 7, how would you truncate a string with an ellipsis if it exceeds a certain length
// (function truncString(strTest, strlen){
//    console.log(`${strTest.slice(0,strlen)}...`)

// })('gadgagdggasjjagdgahbbasndasd', 5)

// how many occurence are the array element
//output {'apple': 2, 'orange': 3, 'grape':1}

// const fruits = ['apple','orange','grape','apple','orange','orange']
// let result = fruits.reduce((acc,curr) => {
//   acc[curr] = (acc[curr] || 0) + 1
//   return acc
// }, {})
// console.log('result', result)

 //const dupArr = [1,2,3,5,3,2]
// console.log('dupArr', new Set([...dupArr]))

// let res = dupArr.filter((v,i,a) => a.indexOf(v) === i)
// console.log('res', res)

function fact(num)
{
   if(num <= 1)
   {
     return 1
   }

   return num * fact(num - 1)
}

// let res = fact(5)
//console.log('res', res)

function fibonacci(num)
{
   if(num < 0)
   {
      return 0
   }
   if(num == 1)
   {
      return 1
   }

   return fibonacci(num-1) + fibonacci(num-2)
}
let res = fibonacci(6)
console.log('res', res)

//0 + 1 + 1 + 2 + 3 + 5 + 8