const saveBtn = document.getElementById("save-btn");
const todoInput = document.getElementById("todo-input");
const deleteBtn = document.getElementById("delete-btn");
const list = document.getElementById("list");

function add() {
  const todoList = document.createElement("li");
  const todoText = document.createElement("p");

  todoText.textContent = todoInput.value;

  todoList.append(todoText);
  list.append(todoList);

  todoInput.value = "";
}

saveBtn.addEventListener("click", function () {
  if (todoInput.value === "") {
    return;
  } else {
    add();
  }
});

todoInput.addEventListener("keydown", (e) => {
  if (e.key !== "Enter") {
    return;
  } else {
    add();
  }
});

deleteBtn.addEventListener("click", () => {
  const deleteTodo = document.querySelectorAll("li");
  deleteTodo.forEach((todoList) => todoList.remove());
});
