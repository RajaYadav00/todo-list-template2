var todolist=JSON.parse(localStorage.getItem("todolocal"));


var completed=JSON.parse(localStorage.getItem("mcompleted")) || [];


todolist.map(function (el,index,arr){
    var row=document.createElement("tr");

    var col1= document.createElement("td");
    col1.innerText=el.name;

    var col2=document.createElement("td")
    col2.innerText=el.qty;

    var col3=document.createElement("td")
    col3.innerText=el.priority;

    var col4=document.createElement("button");
    col4.innerText="Mark as complete";
    col4.addEventListener("click",function(){
        markcompleted(el);
    });
   
    row.append(col1,col2,col3,col4);
    document.querySelector("tbody").append(row);
})


function markcompleted(el){
    console.log(el);
    completed.push(el);
    localStorage.setItem("mcompleted",JSON.stringify(completed));
}