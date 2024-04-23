const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const buttonAddList = document.getElementById("button-add");

buttonAddList.addEventListener("click", addList);

function addList() {
    if (inputBox.value == "") {
        alert("You must write something before adding a task!")
    } else {
        let newList = document.createElement("li");
        newList.innerHTML = inputBox.value;
        listContainer.appendChild(newList);
        let deleteButton = document.createElement("span")
        deleteButton.innerHTML = "\u00d7";
        newList.appendChild(deleteButton);
    }
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click", function(check){
    if (check.target.tagName === "LI") {
        check.target.classList.toggle("checked");
    } 
    else if (check.target.tagName === "SPAN") {
        check.target.parentElement.remove();
    }
    saveData();
})

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}
function getData() {
    listContainer.innerHTML = localStorage.getItem("data");
}
getData();