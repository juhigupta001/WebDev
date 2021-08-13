const express = require('express')

const app = express()

app.get('/',(req,res)=>{
    res.send('<h1 style ="color: red;">Hello World</h1>')
})
app.get('/greet',(req,res)=>{
    console.log(req.headers)
    console.log(req.query)
    let person = 'guest'
    if(req.query.person)
    person = req.query.person
    res.send('Good Morninggg' + person)
})
//http://localhost:4444/greet?a=10


app.listen(4444,()=>
{
    console.log("server started on local host http://localhost:4444/")
})
