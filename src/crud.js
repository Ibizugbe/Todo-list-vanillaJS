const todoBtn = document.querySelector(".todo-btn");
const myList = document.querySelector(".todo-list");
const todoInput = document.querySelector(".todo-input");
const tasks = JSON.parse(localStorage.getItem("task")) || [];

const displayTasks = () => {
  tasks.forEach((element) => {
    const todoInput = document.querySelector(".todo-input");
    const myList = document.querySelector(".todo-list");
    const lists = document.createElement("li");
    lists.classList.add("todo-li");
    const descriptionContainer = document.createElement("div");
    descriptionContainer.classList.add("description");
    const todoDescription = document.createElement("p");
    todoDescription.classList.add("todo-description");
    todoDescription.innerHTML = todoInput.value;
    const completeButton = document.createElement("input");
    completeButton.type = "checkbox";
    const deleteButton = document.createElement("div");
    deleteButton.classList.add("delete");
    deleteButton.innerHTML = `
      <i class="fa-solid fa-trash-can"></i>
    `;
    descriptionContainer.appendChild(completeButton);
    descriptionContainer.appendChild(todoDescription);
    lists.appendChild(descriptionContainer);
    lists.appendChild(deleteButton);
    myList.appendChild(lists);
  });
};
displayTasks();

todoBtn.addEventListener("click", (e) => {
  const input = todoInput.value;
  e.preventDefault();
  todoInput.value = "";
  if (!input) return;
  const obj = {
    description: input,
    completed: false,
    index: tasks.length,
  };
  tasks.push(obj);
  localStorage.setItem("task", JSON.stringify(task));
  renderTasks();
});

const removeTask = (index) => {
  const newArr = tasks.filter((element) => element.index !== index);
  tasks.length = 0;
  let i = 0;
  newArr.forEach((element) => {
    element.index = i;
    i += 1;
  });
  tasks.push(...newArr);
  localStorage.setItem("task", JSON.stringify(tasks));
  renderTasks();
};

myList.addEventListener("click", (e) => {
  if (e.target.classList.contains("fa-solid")) {
    const index = parseInt(e.target.getAttribute("id"), 10);
    removeTask(index);
  }
});

const update = (e) => {
  const clicked = e.target.closest(".todo");

  if (!clicked) return;
  clicked.addEventListener("keyup", () => {
    const task = JSON.parse(localStorage.getItem("task")) || [];
    const targetData = parseInt(clicked.getAttribute("data-desc"), 10);

    const update = task.find((element) => element.index === targetData);

    update.description = clicked.value.trim();
    localStorage.setItem("task", JSON.stringify(tasks));
  });
};

myList.addEventListener("click", update);
