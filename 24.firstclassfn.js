const testfn = function(name) {
    return name + 's'
}


function test(fn, val){
   return fn(val)
}

console.log(test(testfn, 'test'))