const inputBox = document.getElementById("input-box");
const listConatiner = document.getElementById("list-container");

function addTask(){
    if(inputBox.value === ""){
        alert("Would You want to Write Something!!!")
    }
    else{
        let li = document.createElement("li");
        
        //anything we write in input field that add the text to  list
        li.innerHTML = inputBox.value;
        // Show the text in display conatiner
        listConatiner.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

listConatiner.addEventListener("click", function(e){
if(e.target.tagName === "LI"){
    // check the task when it completed
    e.target.classList.toggle("checked");
    saveData();
}
else if(e.target.tagName === "SPAN"){
    // task is deleted
    e.target.parentElement.remove();
    saveData();
}
}, false);

// Store the data in our browser
function saveData(){
    localStorage.setItem("data", listConatiner.innerHTML);
}


function showTask(){
    // showing the old data store in browser
listConatiner.innerHTML = localStorage.getItem("data");
}
showTask();