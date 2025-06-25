// import express from 'express'
// import http from 'http'
const express = require('express')
const http = require('http')
const rout = require('./7.router.js')
const paramsQuery = require('./8.route and query string.js')
const app = express();
const port = 9000

app.use(express.json())

function Middleware(req,res,next){
    if(req.body){
        console.log('middleware called')
      next();
    }
    res.send({'data': 'testing'})
}

//app.use(Middleware)

app.post('/login', (req, res) => {
    console.log('req', req.body)
})

app.post('/register',Middleware, (req, res) => {
    console.log('req', req.body)
})



app.use(rout)
app.use(paramsQuery)

app.use((req,res,next) => {
    console.log('after processing the response middleware is called')
    next();
})

http.createServer(app).listen(port, () => {
    console.log('server running in ports' + port)
})