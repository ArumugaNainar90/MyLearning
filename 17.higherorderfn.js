let number = [1,2,3,4,5]
number.forEach(function (num) {
    console.log('num', num)
})


function mul(fact){
     return function test1(num) {
        return num * fact
     }
}

let res = mul(5)
console.log(res(2))