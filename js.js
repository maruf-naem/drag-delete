

let items = document.getElementsByClassName("list");
let leftBox = document.getElementById("left");
let deleteBox = document.getElementById("deleteBox");


let selected = null;

for(let item of items){
    item.addEventListener("dragstart", function(value){
        selected =  value.target;
    });
}


deleteBox.addEventListener("dragover", function(value){
    value.preventDefault();
    deleteBox.classList.add("active");
})


deleteBox.addEventListener("drop", function(value){
    selected.remove();
    deleteBox.classList.remove("active");
})
