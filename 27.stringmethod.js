//Accessing the string

//length
console.log('JavaScript'.length); // 10

// charAt()
console.log('JavaScript'.charAt(4)); // "S"

let str = 'Hello'
console.log(str[0]) //H

// charCodeAt()
console.log('JavaScript'.charCodeAt(4)); // 83


// Extracting String Part

const str1 = "Apple, Banana, Kiwi"

//slice(start,end) - extracts part of string 
// slice()
console.log(str1.slice(7,13)); // "Banana"
console.log(str1.slice(-4)); // "Kiwi" (negative indices count from end)

// substring(start,end) -  similar to slice but doesn't accept negative indices
console.log(str1.substring(7, 13)); // "Banana"


// string Modification

// concat()
console.log('Hello'.concat(' ', 'World')); // "Hello World"

// replace()
console.log('Hello World'.replace('World', 'JavaScript')); // "Hello JavaScript"

// replaceAll()
console.log('foo bar foo'.replaceAll('foo', 'baz')); // "baz bar baz"

// toLowerCase()
console.log('HELLO'.toLowerCase()); // "hello"

// toUpperCase()
console.log('hello'.toUpperCase()); // "HELLO"

// trim()
console.log('  hello  '.trim()); // "hello"

// padStart()
console.log('5'.padStart(3, '0')); // "005"

// padEnd()
console.log('5'.padEnd(3, '0')); // "500"



// searching

let str2 = "Please locate where 'locate occurs!'"

// indexOf() - return position of first occurence
console.log(str2.indexOf('locate')); // 7
console.log(str2.indexOf('locate', 10)); // 21 (start from position 10)

// lastIndexOf() - returns position of last occurence
console.log(str2.lastIndexOf('locate')); // 7

//search() - searches for a match
console.log(str2.search('locate')) //7

// includes()
console.log(str2.includes('locate')); // true

// startsWith()
console.log(str2.startsWith('Please')); // true

// endsWith()
console.log(str2.endsWith('occurs!')); // true



// Pattern Matching

// match()
console.log('Hello123'.match(/\d+/)); // ["123"]

//returns an array of matches
console.log("The rain in SPAIN stays mainly in the plain".match(/ain/gi))
// ['ain','AIN','ain','ain']

//matchAll() - returns an iterator of all matches
const matches = "The rain in SPAIN".matchAll(/ain/gi)
for(const match of matches)
{
   console.log(match)
}

//split

// split()
console.log('a,b,c'.split(',')); // ["a", "b", "c"]


// other method

// repeat()
console.log('ha'.repeat(3)); // "hahaha"

//toString()
const num = 12
console.log(num.toString()) //"12"

// valueOf()
console.log("Hello".valueOf()) //"Hello"