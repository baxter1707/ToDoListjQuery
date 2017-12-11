
let div1 = $("#task-container")
let ul1 = $("#task-list")
let ulCompleted=$("#completed-list")


$("#addTaskButton").click(function(){
let userInput = $("#toDoItem").val()
let taskItem=$("<div>").append($("<input type=checkbox>").addClass("check-box")).append($("<li>").html(userInput)).append($("<button>").addClass("delete-Button").html("Delete"))
ul1.append(taskItem)


  ul1.on("click","button",function(){
  $(this).parent().remove();
})


  ul1.on("change","[type=checkbox]", function(){
    console.log("this worked")
    $(this).parent().appendTo(ulCompleted)
  })

  ulCompleted.on("click","button",function(){
  $(this).parent().remove();
  })

  ulCompleted.on("change","[type=checkbox]", function(){
    console.log("this worked")
    $(this).parent().appendTo(ul1)
  })

})


$("#task-list").sortable();
$("#completed-list").sortable();
