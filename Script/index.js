document.querySelector("#form").addEventListener("submit",formsubmit);

var todoArr=JSON.parse(localStorage.getItem("todolocal"))||[];
function formsubmit(event){
    event.preventDefault();
    var name=document.querySelector("#name").value;
    var qty=document.querySelector("#qty").value;
    var priority=document.querySelector("#priority").value;

    var todoObj={
             name:name,
             qty:qty,
             priority:priority
    }
    todoArr.push(todoObj)
    console.log(todoArr)
    localStorage.setItem("todolocal",JSON.stringify(todoArr))
    

}