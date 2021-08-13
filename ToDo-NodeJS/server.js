const express = require('express')
const app = express()
app.use(express.urlencoded({extended:true}))
let task =[
    'sample list'
]
app.get('/', (req, res)=>{
    let taskList = task.map(t => `<li>${t}</li>`).join('\n') //take each task and turn it into String <li>${t}</li>'
  console.log(taskList)
    // BackTick is used in HTML code line 8 and line
    res.send(` 
   <!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <meta http-equiv="X-UA-Compatible" content="IE=edge">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title>Document</title>
   </head>
   <body>
       <form action="/" method="POST">
           <input name = "newTask">
           <button type = "submit">ADD</button>
       </form>
       <ul>
          ${taskList}
       </ul>
   </body>
   </html>
   `)
    // res.sendFile(__dirname + '/index.html')
})
app.post('/', (req,res)=>{
    console.log("ADD Clicked")
    task.push(req.body.newTask);
    res.redirect('/')//sends a new GET request to this address
})

app.listen(4444,()=>{
    console.log("Started")
})