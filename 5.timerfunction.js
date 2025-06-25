setTimeout((val) => {
   console.log('setTimeout function called..', val)
}, 2000, 'test')

let ival=0;
let intervalname = setInterval(() => {
    ival = ival + 1
    console.log('setInterval function called..', ival)
    if(ival == 5)
    {
       clearInterval(intervalname)
    }
}, 1000)

setImmediate((val)=> {
    console.log('setImmediate', val)
}, 'TimeRanges')

process.nextTick(()=> {
    console.log('nextTick is called')
})