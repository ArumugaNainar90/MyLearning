console.log('Start');

setTimeout(() => {
  console.log('setTimeout');
}, 0);

setImmediate(() => {
  console.log('setImmediate');
});

Promise.resolve().then(() => {
  console.log('Promise');
});

process.nextTick(() => {
  console.log('nextTick');
});

console.log('End');

//output:
//start
//end
//nextTick
//Promise  
//setTimeout
//setImmediate

//Explanation:
// 1.console.log('Start') and console.log('End') execute first because they are synchronous
// 2.process.nextTick executes before the event loop continue to the next phase
// 3.Promises are resolved in the microtask queue after process.nextTick
// 4.setImmediate executes in the check phase
// 5.setTimeout executes in the timer phase


