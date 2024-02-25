function addTask() {
    var input = document.getElementById("taskInput").value;
    var time = document.getElementById("taskTime").value;
    if (input === "") {
        alert("Please enter a task!");
        return;
    }
    var ul = document.getElementById("taskList");
    var li = document.createElement("li");
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    li.appendChild(checkbox);
    li.appendChild(document.createTextNode(input + " - " + time));
    
    var buttonContainer = document.createElement("div");
    buttonContainer.className = "button-container";

    var editBtn = document.createElement("button");
    editBtn.innerHTML = "Edit";
    editBtn.className = "edit-btn";
    editBtn.onclick = function() {
        var newText = prompt("Edit task:", input);
        if (newText !== null && newText !== "") {
            li.childNodes[1].textContent = newText + " - " + time;
        }
    };
    buttonContainer.appendChild(editBtn);

    var deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "&#x2716;";
    deleteBtn.className = "delete-btn";
    deleteBtn.onclick = function() {
        li.remove();
    };
    buttonContainer.appendChild(deleteBtn);

    li.appendChild(buttonContainer);

    ul.appendChild(li);
    document.getElementById("taskInput").value = "";
    document.getElementById("taskTime").value = "";
}

document.addEventListener("DOMContentLoaded", function() {
    var taskList = document.getElementById("taskList");
    taskList.addEventListener("click", function(e) {
        if (e.target.tagName === "INPUT") {
            if (e.target.checked) {
                e.target.parentNode.style.textDecoration = "line-through";
            } else {
                e.target.parentNode.style.textDecoration = "none";
            }
        }
    });
});
