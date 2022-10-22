let title=document.getElementById("title");
let checkradio;
let radioFeature =document.getElementById("flexRadioDefault1");
let radioBug =document.getElementById("flexRadioDefault2");
let listPrio=document.getElementById("selectp");
let listStatus=document.getElementById("selectStatus");
let date=document.getElementById("date");
let desc=document.getElementById("exampleFormControlTextarea1");
var todoPlace=document.getElementById("to-do-tasks");
var inprogressPlace=document.getElementById("in-progress-tasks");
var donePlace=document.getElementById("done-tasks");

// var grop;
let moddle=document.getElementById("taskBtn");
let save=document.getElementById("btnSave");
let update=document.getElementById("btnUpdate");
let remove=document.getElementById("btnDelete");
let add=document.getElementById("btnAdd");
var index;
var icon;
var todospan=document.getElementById("to-do-task-count");
var inprogressspan=document.getElementById("in-progress-tasks-count");
var donespan=document.getElementById("done-tasks-count")
var tasksStored;





function addnew()
{
     clearData();

    update.style.display="none";
    remove.style.display="none";
    save.style.display="block";

}



// let tasks=[];

btnSave.onclick=function()
{

    if(radioFeature.checked)
    {
        checkradio=radioFeature.value;
    }
   else if(radioBug.checked)
    {
        checkradio=radioBug.value;

    }


    let newTask = {
        title: title.value,
        type:checkradio,
        priority: listPrio.value,
        status: listStatus.value,
        date: date.value,
        description: desc.value
    }

    tasks.push(newTask)
    localStorage.setItem("tasks",JSON.stringify(tasks));
 tasksStored=localStorage.getItem("tasks");
    tasksStored=JSON.parse(tasksStored);
      showData();
   
}



function showData()
{
     todoPlace.innerHTML="";
     inprogressPlace.innerHTML="";
     donePlace.innerHTML="";

   tasksStored=localStorage.getItem("tasks");
   tasksStored=JSON.parse(tasksStored);


    let a=0,b=0,c=0;
   for(let i=0;i<tasksStored.length;i++)
   {
    let grop=document.createElement("button");
    grop.classList.add("mt-1","mb-1","pb-1","d-flex", "border-0", "text-start", "bg-white", "w-100","tt")
    grop.setAttribute("data-bs-toggle","modal") ;
    grop.setAttribute("data-bs-target","#taskBtn");

   
    grop.onclick=function()
    {
       update.style.display="block";
       remove.style.display="block";
       save.style.display="none"; 
       index=i;
       title.value=tasks[i].title;
       if(tasks[i].type=="Feature")
        radioFeature.checked=true;
       else
        radioBug.checked=true;
        listPrio.value=tasks[i].priority;
        listStatus.value=tasks[i].status;
        date.value=tasks[i].date;
        desc.value=tasks[i].description;

    }
    grop.innerHTML = `
<div class="">
    <i class=" ${tasksStored[i].status==1 ? "bi bi-question-circle text-success fs-5 pe-2" :tasksStored[i].status==2 ? "fa-solid fa-circle-notch text-success fs-5 pe-2":tasksStored[i].status==3 ? "bi bi-check-circle text-success fs-5 pe-2":"" } "></i> 
</div>
<div class="">
    <div class="fs-5 text-capitalize p-1">${tasksStored[i].title}</div>
    <div class="">
        <div class="text-secondary">${i+1}# created in ${tasksStored[i].date}</div>
        <div class="" title="There is hardly anything more frustrating than having to look for current requirements in tens of comments under the actual description or having to decide which commenter is actually authorized to change the requirements. The goal here is to keep all the up-to-date requirements and details in the main/primary description of a task. Even though the information in comments may affect initial criteria, just update this primary description accordingly.">${tasksStored[i].description}</div>
    </div>
    <div class="">
        <span class="btn btn-primary">${tasksStored[i].priority}</span>
        <span class="btn btn-secondary text-black">${tasksStored[i].type}</span>
    </div>
</div>

    `

    if(tasksStored[i].status==1)
    {
         todoPlace.appendChild(grop);
         a++;
        todospan.innerText=a;


    }
    else if(tasksStored[i].status==2)
    {
         inprogressPlace.appendChild(grop);
         b++;
         inprogressspan.innerText=b;
    }
    else if(tasksStored[i].status==3)
    {
         donePlace.appendChild(grop);
         c++;
         donespan.innerText=c;
    }
   
   }











  tasks=tasksStored;
}



function clearData()
{
title.value="";
radioFeature.checked=false;
radioBug.checked=false;
listPrio.value="Low";
listStatus.value=1;
date.value="";
desc.value="";

} 
function removeItem()
{
     tasks.splice(index,1);
     localStorage.setItem("tasks",JSON.stringify(tasks));
    showData();
}


 function upDate()
 {
   
    tasks[index].title= title.value;
    if(tasks[index].type=="Feature")
     radioFeature.checked=true;
    else
    radioBug.checked=true;
    tasks[index].priority=listPrio.value;
    tasks[index].status=listStatus.value;
    tasks[index].date= date.value;
    tasks[index].description=desc.value;
    localStorage.setItem("tasks",JSON.stringify(tasks));
    showData();

 }

