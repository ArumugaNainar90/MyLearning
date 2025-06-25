//import {writeFile} from 'fs'

const fs = require('fs')
const { text } = require('stream/consumers')
const arrData = []
arrData.push({ 'id': 1 })
const jsonData = JSON.stringify(arrData)
console.log('jsonData', jsonData)

fs.writeFile('test.txt', jsonData, 'utf8', (err) => {
    if (err) {
        console.log(err)
    }
})


fs.readFile('test.txt', 'utf8', (err, data) => {
    if (data) {
        let jsonData = JSON.parse(data)
        console.log('jsonData', jsonData)
        jsonData = [...jsonData, {'id':3}]
        const jsonData1 = JSON.stringify(jsonData)
        fs.writeFile('test.txt', jsonData1, 'utf8', (err) => {
            if (err) {
                console.log(err)
            }
        })
        fs.stat('test.txt', (err,data) => {
              console.log('stat', data.isFile())
        })
    }

    if (err) console.log('err', err)
})