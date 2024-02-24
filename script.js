function addTask() {
    var input = document.getElementById("taskInput").value;
    if (input === "") {
        alert("Please enter a task!");
        return;
    }
    var ul = document.getElementById("taskList");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input));
    ul.appendChild(li);
    document.getElementById("taskInput").value = "";
}

document.addEventListener("DOMContentLoaded", function() {
    var taskList = document.getElementById("taskList");
    taskList.addEventListener("click", function(e) {
        if (e.target.tagName === "LI") {
            e.target.remove();
        }
    });
});
