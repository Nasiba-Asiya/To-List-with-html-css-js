// creating the main container

let main = document.createElement("main");

main.classList.add("container");

document.body.prepend(main);

let projeckName = document.createElement("h1");
projeckName.innerHTML = "Мой список задач";
main.append(projeckName);

let listBlock = document.createElement("div");
main.append(listBlock);

let firstDiv = document.createElement("div");
listBlock.className = "mainBlock";
listBlock.append(firstDiv);

let textIn = document.createElement("input");
textIn.className = "textIn";
textIn.setAttribute("placeholder", "Введи свою задачу ...");
firstDiv.append(textIn);

let setDate = document.createElement("input");
setDate.setAttribute("type", "date");
firstDiv.append(setDate);

let addBtn = document.createElement("button");
addBtn.innerHTML = "Добавить задачу";
addBtn.id = "addBtn";
firstDiv.append(addBtn);

let list = document.createElement("ul");
listBlock.append(list);

const addTodo = () => {
  let newTask = textIn.value;
  let date = setDate.value;

  

  if (newTask != "") {
    let li = document.createElement("li");
    li.className = "taskItem";

    let doneBtn = document.createElement("img");
    doneBtn.src = "check-icon.png";
    doneBtn.className = "btn";
    doneBtn.addEventListener("click", completeTodo);

    let deleteBtn = document.createElement("img");
    deleteBtn.src = "delete-icon.png";
    deleteBtn.className = "btn";
    deleteBtn.addEventListener("click", deleteTodo);

    let label = document.createElement("label");
    label.append(newTask + " " + date);

    li.append(label);
    li.append(doneBtn);
    li.append(deleteBtn);

    list.append(li);

    textIn.value = "";
    setDate.value = "";
  }
};

const deleteTodo = (e) => {
  e.currentTarget.parentNode.remove(e.parentNode);
};

const completeTodo = (e) => {
  let isDone = e.currentTarget.parentNode.classList.contains("done");

  isDone
    ? e.currentTarget.parentNode.classList.remove("done")
    : e.currentTarget.parentNode.classList.add("done");
};
addBtn.addEventListener("click", addTodo);
