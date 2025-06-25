const promiseFunc = new Promise((resolve, reject) => {
    resolve('test')
})

const promiseFunc1 = new Promise((resolve, reject) => {
    resolve('test1')
})

const promiseFunc2 = new Promise((resolve, reject) => {
    resolve('test2')
})
/**
 
Normal Promise Method

// promiseFunc.then((val) => {
//     console.log('val', val)
// })
// .catch((err) => {
// console.log('err', err)
// })
// .finally()
// {
//     console.log('finally called.. ')
// }

 */


/*
// promise.all
if all the methods are sucess it will come to then block in arrary format
if any one fail it will come to catch block

const promisemethod = [promiseFunc,promiseFunc1, promiseFunc2]
Promise.all(promisemethod)
.then(value => {
   console.log('PromiseAllVal', value)
})
.catch(err => {
   console.log('PromiseAllcatch', err)
})

*/

/*
// promise.race
//if will return the first promise success/failure result

const promisemethod = [promiseFunc,promiseFunc1, promiseFunc2]
Promise.race(promisemethod)
.then(value => {
   console.log('PromiseAllVal', value)
})
.catch(err => {
   console.log('PromiseAllcatch', err)
})

*/

/*
// promise.allsettled

//if will return the result in then block only

//Result:
// PromiseAllVal [
//   { status: 'rejected', reason: 'test' },
//   { status: 'fulfilled', value: 'test1' },
//   { status: 'rejected', reason: 'test2' }
// ]

const promisemethod = [promiseFunc,promiseFunc1, promiseFunc2]
Promise.allSettled(promisemethod)
.then(value => {
   console.log('PromiseAllVal', value)
})
.catch(err => {
   console.log('PromiseAllcatch', err)
})

*/

/*
// promise.any

//if any one of the method return success it will come to then block 
if all fails it will go to catch block

const promisemethod = [promiseFunc,promiseFunc1, promiseFunc2]
Promise.any(promisemethod)
.then(value => {
   console.log('PromiseAllVal', value)
})
.catch(err => {
   console.log('PromiseAllcatch', err)
})

*/

