var globallet = 'globalLet'

// global scope
function test() {
    console.log('globallet', globallet)
}

//function scope
function test1() {
    let fnscope = "fnlet"
    console.log('fnscope', fnscope)
}
//console.log('fnscope1', fnscope)


//block scope
function test2() {
    if (true) {
        let scope = "fnlet"
        console.log('fnscope', scope)
    }
  //  console.log('fnscope1', scope)    
}


test()
test1()
test2()