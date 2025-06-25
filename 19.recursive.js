function factorial(num){
   
    console.log('num', num)
       if(num <= 1)
       {
           return 1
       }

       
       let res = num * factorial(num - 1)
       console.log('return', res)
       return res
}

//factorial(5)

function fibonacci(n){

    console.log('num', n)
    if(n < 0) return 0;
    if(n === 1) return 1;

    let res = fibonacci(n-1) + fibonacci(n-2)
    console.log('return', res)
    return res
}

fibonacci(6)