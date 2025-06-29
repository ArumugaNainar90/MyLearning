// how many occurence are the array element
//output {'apple': 2, 'orange': 3, 'grape':1}

const fruits = ['apple','orange','grape','apple','orange','orange']

const res = fruits.reduce((acc,curr) => {
        acc[curr] = (acc[curr] || 0) + 1
        return acc
},{}) 

//console.log('res', res)


// explain every and some

const numbers = [1,2,3,4,5]

// console.log(numbers.some( n => n > 2))
// console.log(numbers.every( n => n > 0))


// How do you flatten the nested array
const testarr = [1,2,3,[4,5]]

//instead of flat we can use reduce fn
let res1 = testarr.reduce((acc,curr) => {
      Array.isArray(curr) ? acc.push(...curr) : acc.push(curr)
      return acc
}, [])

//console.log('res', res1)



// how to remove duplicate value from array

const dupArr = [1,2,3,5,3,2]

let res2 =dupArr.filter((v,i,a) => a.indexOf(v) === i)

// console.log('res2', res2)

//console.log(...new Set(dupArr))

// /// different way to create an copy of an array

// const original = [1,2,3,4,5]

// //use spread operator

// const copy = [...original,6,7] 
// console.log('original', original)
// console.log('copy', copy)

// // use slice()

// const copy1 = original.slice()
// console.log('original', original)
// copy1.push(6)
// console.log('copy1', copy1)

// // use Array.from

// const copy2 = Array.from(original) 
// console.log('original', original)
// copy2.push(6)
// console.log('copy2', copy2)

// // concat

// const copy3 = [].concat(original) 
// console.log('original', original)
// copy3.push(6)
// console.log('copy3', copy3)

// // Deep copy of nested array
// const nested = [1, [2,3], 4]
// const copy4 = JSON.parse(JSON.stringify(nested)) 
// console.log('original', original)
// copy4.push(6)
// console.log('copy4', copy4)


// // entries()
// const fruits1 = ['apple','banana','orange','grape']
// const fruitsEnt = fruits1.entries()

// for(let [i,e] of fruitsEnt)
// {
//    console.log(`index of ${i} : value is ${e}`)
// }

//keys()

const sampleData = 
[{
        id: 1,
        name: 'name'
},
{
        id: 2,
        name: 'name1'
}]

for(const [i,e] of sampleData.entries())
{
      //  console.log('e', e)
}

for(const key of sampleData.keys())
{
     //   console.log('key', key)
}

for(const value of sampleData.values())
{
     //   console.log('value', value)
}


//// Array Destructing

// const numbers3 =  [1,2,3,4,5]

// const [a,b,c, ...rest] = numbers
// console.log('a', a)
// console.log('rest', rest)

// const [d,,e] = numbers
// console.log('d',d)
// console.log('e', e)

// const [f=6,g=7,extra = 20] = [1,2]
// console.log('f',f)
// console.log('g', g)
// console.log('extra', extra)

// let m=1, n=2;

// //[m,n] = [n,m]
// [n,m] = [m,n]
// console.log('m', m)
// console.log('n', n)

// // efficiently remove all the falsy values from array
// const mixedValues = [0,1, false, '',3,null,undefined,NaN, 4]
// let result = mixedValues.filter(Boolean)
// console.log('result', result)
// console.log('typeof', Boolean(3))
// console.log('typeof1', Boolean(undefined))


//// sort an array of objects by multiple properties

const stud = [
    { id: 1, name: 'jane', age: 30 },
    { id: 2, name: 'jane1', age: 10 },
    { id: 3, name: 'jane3', age: 20 }
];

stud.sort((a,b) => {
   return a.age - b.age
})

console.log(stud)
