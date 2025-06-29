function* genFn(fullValue, chunk) {
    for (let i = 0; i < fullValue.length; i += chunk) {
     // console.log('val', fullValue.slice(i, i + chunk))
     yield fullValue.slice(i, i + chunk)
    } 
}

let generatedArray = Array.from({ length: 50 }, (_, i) => i + 1)
const res = genFn(generatedArray, 10)

for(let response of res)
{
   console.log('response', response)
}

// console.log(res.next().value)
// console.log(res.next().value)