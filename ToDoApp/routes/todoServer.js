const route = require('express').Router()

let todos = [];

route.get('/', function (req, res) {
    console.log("Inside Route server")
    res.send(todos)
})

route.post('/', function (req, res) {
    console.log("Inside Route server POST calls")
    todos.push({
        task: req.body.task
    })
    res.send(todos)
})

module.exports = route