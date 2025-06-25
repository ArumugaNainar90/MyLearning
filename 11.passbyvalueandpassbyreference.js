//pass by value

let x = 5;
function passbyval(val)
{
   val = 10;
   console.log('val', val)
}

passbyval(x);
console.log(x)

//pass by reference
let obj = {value: 'original'};
function passbyreference(val)
{
   obj.value = 'changed'
   console.log('val', val)
}

passbyreference(obj);
console.log(obj)

