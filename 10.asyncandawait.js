function promiseFunc(){
return new Promise((resolve, reject) => {
    resolve('test')
})
}

function promiseFunc1(){
return new Promise((resolve, reject) => {
    reject('test1')
})
}

function promiseFunc2(){
return new Promise((resolve, reject) => {
    resolve('test2')
})
}


async function callPromiseMethod() {
    try {
       let res = await promiseFunc();
       console.log('res', res)
       let res1 = await promiseFunc1();
       console.log('res1', res1)
       let res2 = await promiseFunc2();
       console.log('res2', res2)
    }
    catch (err) {
      console.log('err', err)
    }
}

callPromiseMethod()

