let testarr = ['a', 'b', 'c', 'd']

for (let i = 0; i < testarr.length; i++) {

    if (testarr[i] === 'c') {
        continue;
    }
    console.log('i', testarr[i])

}


let day = 3
let dayName = ''
switch(day){
    case 1:
    dayName = 'Monday'
    break;
    case 2:
    dayName = 'Tuesday'
    break;
    case 3:
    dayName = 'Wednesday'
    break;
    default:
    break;
}

console.log(dayName)