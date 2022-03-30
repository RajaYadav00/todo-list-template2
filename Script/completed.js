var markcompleted=JSON.parse(localStorage.getItem("mcompleted"));


markcompleted.map(function(el,index,arr){
    var row=document.createElement("tr");

    var col1= document.createElement("td");
    col1.innerText=el.name;

    var col2=document.createElement("td")
    col2.innerText=el.qty;

    var col3=document.createElement("td")
    col3.innerText=el.priority;

   
   
    row.append(col1,col2,col3);
    document.querySelector("tbody").append(row);
})