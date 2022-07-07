export const addTodo = (event) => {
  // stop form submission
  event.preventDefault();
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
  // clear todo input
  todoInput.value = "";
};
