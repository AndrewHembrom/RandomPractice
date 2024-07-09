let globalId = 1;

function markAsDone(todoId) { 
    const parent = document.getElementById(todoId);
    parent.children[2].innerHTML = "Done!";
}

function createChild(title, description, id) { 
    const child = document.createElement("div");
    const firstGrandChild = document.createElement("div");
    firstGrandChild.innerHTML = title.value;
    const secondGrandChild = document.createElement("div");
    secondGrandChild.innerHTML = description.value;
    const thirdGrandChild = document.createElement("button");
    thirdGrandChild.innerHTML = "Marks as Done";
    thirdGrandChild.setAttribute("onclick", `markAsDone(${id})`);
    child.appendChild(firstGrandChild);
    child.appendChild(secondGrandChild);
    child.appendChild(thirdGrandChild);
    child.setAttribute("id", id);
    return child;
}

function addTodo(){ 
    const title = document.getElementById("task");
    const description = document.getElementById("desc");
    const parent = document.getElementById("container");

    parent.appendChild(createChild(title, description, globalId++));
}