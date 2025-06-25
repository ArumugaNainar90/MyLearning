const express = require('express')
const router = express.Router()


router.get('/testParam/:id/:name', (req,res) => {
    console.log('params-id', req.params.id)
    console.log('params-name', req.params.name)
})

router.get('/testQuery', (req,res) => {
    console.log('query-id', req.query.id)
    console.log('query-name', req.query.name)
})

module.exports = router