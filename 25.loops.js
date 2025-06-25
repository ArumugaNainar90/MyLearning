let testarr = ['a', 'b', 'c', 'd']

for (let i = 0; i < testarr.length; i++) {
    console.log('i', testarr[i])
}

testarr.forEach((val) => {
    console.log('val', val)
})

for (let val of testarr) {
    console.log('value', val)
}

for (let val in testarr) {
    console.log('value', val)
}

let i = 0;
while(i < 5)
{
    i++
    console.log(i)
}


let j=0
do{
  j++
  console.log(j)
}
while(j < 5)