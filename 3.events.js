import {EventEmitter} from 'events'
const event = new EventEmitter()

event.on('test', (val, val1) => {
    console.log('test log', val)
    console.log('test log1', val1)
})


function testData(){
event.emit('test', [1,2,3], [4,5,6])
}

testData()