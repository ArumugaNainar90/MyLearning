// 1, how to do check the string is palindrone
// 2, how would you reverse the string
// 3, how would you capitalize the first letter of the word in a sentence
// 4, how would you count the occurence of a character in the string
// 5, how would you check if a string contains only numbers
// 6, how would you extract all numbers from a string
// 7, how would you truncate a string with an ellipsis if it exceeds a certain length
// 8, how would you implement a case-insensitive search in a string?
// 9, how would you convert a string to camelcase


//1, how to do check the string is palindrone
// if u reverse the string we need to get the same output

// (function palindrome(strVal) {
//     let res = [...strVal].reverse().join('')
//     if (strVal == res) {
//         console.log('it is palindrome')
//     }
// })('civic')

// 3, how would you capitalize the first letter of the word in a sentence

// (function firstLetterCapital(strVal)
// {
//    console.log(strVal.split(' ').map(n => `${n.charAt(0).toUpperCase()}${n.slice(1)}`).join(' '))
// })('this is my name')

// 4, how would you count the occurence of a character in the string

// (function numberOfOccurence(strVal, parVal)
// {
//     console.log(strVal.split(' ').filter(n => n === parVal).length)
// })('This is my name and This is my friend name', 'and')

//5, how would you check if a string contains only numbers

// (function checkNumber(strVal)
// {
//     if(strVal.match(/\d/g))
//     {
//        console.log('string contains number')
//     }
// })('hello1')


//6, how would you extract all numbers from a string
// (function filterNumber(strVal){
//    console.log(strVal.split('').filter(n => !isNaN(n)).join(''))
// })('hello123')

//7, how would you truncate a string with an ellipsis if it exceeds a certain length
// (function truncString(fulVal, maxLength){
//   console.log(fulVal.length > maxLength ? fulVal.slice(0, maxLength) + '...' : fulVal)  
// })('this is hello', 5)

// 8, how would you implement a case-insensitive search in a string?
// (function incasesensitive(strVal, matchVal)
// {
//    console.log(strVal.toLowerCase().split(' ').includes(matchVal))
// })('this is Javascript', 'javascript')

// 9, how would you convert a string to camelcase
(function createCamelCase(strVal)
{
  let test4 = strVal.replace(/[^a-zA-Z0-9 ]/g, ' ').split(' ')
  let test5 = test4.slice(1).map(n => `${n.charAt(0).toUpperCase()}${n.slice(1)}`)
  console.log([test4[0],...test5].join(''))
})('first_name')
