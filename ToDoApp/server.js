const express = require('express')
const app = express()
const todoRoute = require('./routes/todoServer')

//For Post Requests
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/abc', express.static(__dirname + '/public'))
app.use('/todoServer', todoRoute)

app.get('/', (req, res)=>{
res.send("TODO List App")
})

app.listen(4444,()=>{
    console.log("Started")
})