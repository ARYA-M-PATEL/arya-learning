const mainTodoElem = document.querySelector(".todo-lists-elem");
const inputValue = document.getElementById("inputvalue");

// addingaddto list todynamic
const addTodoDynamicElemment = (curElem) => {
  const divElement = document.createElement("div");
  divElement.classList.add("main_todo_div");
  divElement.innerHTML = `<li>${curElem}</li> <button class="deleteBtn">Delete</button>`;
  mainTodoElem.append(divElement);
};

const getTodoListsFromLocal = () => {
  return JSON.parse(localStorage.getItem("TodoList Item"));
};

const addTodoListLocalStorage = (localTodoLists) => {
  return localStorage.setItem("TodoList Item", JSON.stringify(localTodoLists));
};

let localTodoLists = getTodoListsFromLocal() || [];
const addTodoLists = (e) => {
  e.preventDefault();
  const todoListValue = inputValue.value.trim();
  inputValue.value = "";
  if (todoListValue != "" && !localTodoLists.includes(todoListValue)) {
    localTodoLists.push(todoListValue);
    localTodoLists = [...new Set(localTodoLists)];
    console.log(localTodoLists);

    localStorage.setItem("TodoList Item", JSON.stringify(localTodoLists));
    // const divElement = document.createElement("div")
    // divElement.classList.add("main_todo_div")
    // divElement.innerHTML = `<li>${inputValue.value}</li> <button class="deleteBtn">Delete</button>`
    // mainTodoElem.append(divElement)
    addTodoDynamicElemment(todoListValue);
  }
};

const showTodoList = () => {
  console.log(localTodoLists);

  localTodoLists.forEach((curElem) => {
    addTodoDynamicElemment(curElem);
  });
};
showTodoList();

// remove the data
const removeTodoElem = (e) => {
  const todoRemove = e.target;
  let todoListContent = todoRemove.previousElementSibling.innerText;
  let parentElem = todoRemove.parentElement;
  console.log(todoListContent);
  localTodoLists = localTodoLists.filter((curTodo) => {
    // console.log(curTodo)
    return curTodo != todoListContent;
  });

  addTodoListLocalStorage(localTodoLists);
  parentElem.remove();

  console.log(localTodoLists);
};

mainTodoElem.addEventListener("click", (e) => {
  e.preventDefault();

  console.log(e.target);
  if (e.target.classList.contains("deleteBtn")) {
    removeTodoElem(e);
  }
});

document.querySelector(".btn").addEventListener("click", (e) => {
  addTodoLists(e);
});

// ***** For Clock *****
const currentTime = () => {
  let curTime = new Date().toLocaleTimeString();
  document.getElementById("clock").innerText = curTime;
};

currentTime();

setInterval(() => {
  currentTime();
}, 1000);

const currentDate = () => {
  let curDate = new Date();
  document.getElementById("date").innerText = curDate;
};

currentDate();

setInterval(() => {
  currentDate();
}, 1000);
