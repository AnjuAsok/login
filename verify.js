
function check(callback)
{
    var user=document.getElementById("username");
    var pwd=document.getElementById("password");
    if(user.value.trim()=="admin"&&pwd.value.trim()=="12345")
    {
        callback();
    }
    else{
        alert("invalid user");
        //return false;
        window.location.href="login.html";
    }
}
function redirect()
{
    window.location.href="main.html";
}



function displaylist(){
    const request=new XMLHttpRequest();
    request.onreadystatechange=function(){
        try{
            if(request.readyState==XMLHttpRequest.DONE)
            {
                if(request.status===200){
                    console.log(request.responseText);
                    display(request.responseText)
                }
                else{
                    alert("Error from API");
                }
            }
        }
        catch(e){
            alert(e.description);
        }
    }
    try{
    request.open("GET","https://jsonplaceholder.typicode.com/todos",true);
    request.send();
    }
    catch(e)
    {
        alert(e.description);
    }
    // if(request.readyState==XMLHttpRequest.DONE){
    //     console.log(JSON.parse(request.response));
    // }
    
}
function display(data)
{
    var list=JSON.parse(data);
    let table=document.getElementById("todotable");
    for(var i=0;i<list.length;i++){
        let rowcount=table.rows.length;
        var row=table.insertRow(rowcount);
        var cell1=row.insertCell(0);
        cell1.innerHTML=list[i].id;
        var cell2=row.insertCell(1);
        cell2.innerHTML=list[i].title;
        var cell3=row.insertCell(2);
        var element=document.createElement("input");
        element.type="checkbox";
        cell3.appendChild(element);
        if(list[i].completed==true)
        {
            element.setAttribute("checked","true");
            element.setAttribute("disabled","true")
        }
        element.addEventListener('change',(event)=>{
           if(event.currentTarget.checked){
                count++;
                checkCounter();
            }
            }
        );
        // element.addEventListener('change',(event)=>{
        //     if(event.currentTarget.checked){
        //         count++;
        //         checkCounter();
        //     }
        // })
    }
}
var count=0;
function checkCounter()
{
    let p=new Promise((resolve,reject)=>{
        if(count==5)
        {
           resolve("You have completed 5 tasks");
        }
    });
     p.then((s)=>
    {
       alert(s);
     })
 }
function logout()
{
    window.location.href="login.html";
}