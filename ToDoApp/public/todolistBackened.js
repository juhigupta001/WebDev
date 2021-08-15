$(function(){
    let addtodobtn = $('#addbutton')
    let todoList =  $('#todolist')
    let newTask = $('#textbox')

    addtodobtn.click(function(){
        console.log("ADD button clicked")
        let myTask =  newTask.val()
        console.log(myTask)

        //make a async call to post method
        $.post(
            '/todoServer/',
            {task : myTask}, //Give Key : value as we give in POSTMAN : converts req.body.task in Express
            function (data) //callback function
            {
                console.log("data is" + data)
                todoList.empty();
                for(todo of data){
                    todoList.append("<li>"+todo.task+"</li>")
                } 
            }
        )
    })
})