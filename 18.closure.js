function fullmethod(num)
{
   return {
       increment: () => {
            num++
            return num
       },
        decrement: () => {
            num--
            return num--
       }
   }
}

let res = fullmethod(1)

console.log(res.increment())
console.log(res.increment())
console.log(res.decrement())