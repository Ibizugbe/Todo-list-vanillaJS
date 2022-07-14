/**
 * @jest-environment jsdom
 */
import { addTodo, deleteTodo, removeTodo, updateTodo } from "./myTasks";
// test for add and remove

describe("add_delete_test", () => {
  it("add_delete_Todo", () => {
    const listArray = [
      {
        id: 0,
        title: "first-task",
        completed: false,
      },
      {
        id: 1,
        title: "second-task",
        completed: false,
      },
      {
        id: 2,
        title: "third-task",
        completed: false,
      },
    ];
    const quest = (id) => listArray.filter((item) => item.id !== id);

    expect(addTodo("first-task")).toBe(1);
    expect(addTodo("second-task")).toBe(1);
    expect(addTodo("third-task")).toBe(1);
    expect(deleteTodo(0)).toEqual(quest(0));
    expect(deleteTodo(1)).toEqual(quest(1));
    expect(deleteTodo(2)).toEqual(quest(2));
  });
});
// test for clear completed task
describe("clear completed tasks", () => {
  it("clear_completed_Todo", () => {
    const listArray = [
      {
        id: 0,
        title: "first-test",
        completed: true,
      },
      {
        id: 1,
        title: "second-test",
        completed: true,
      },
      {
        id: 2,
        title: "third-test",
        completed: true,
      },
    ];
    expect(removeTodo(listArray)).toEqual([]);
  });
});

// test to add element to html document
describe("test_DOM", () => {
  it("test_DOM", () => {
    const list = document.createElement("ul");
    list.id = "todo-list";
    const listItem = document.createElement("li");
    listItem.id = "todo-item";
    listItem.innerHTML = "test";
    list.appendChild(listItem);
    expect(list.innerHTML).toBe('<li id="todo-item">test</li>');
  });
});
// show whether task is completed
describe("edit_status_test", () => {
  it("edit_completed_status_Todo", () => {
    expect(updateTodo(0, "test", true).completed).toBe(true);
  });
});
// to edit tasks description
describe("edit_description_test", () => {
  it("edit_description_Todo", () => {
    expect(updateTodo(0, "clifford", true).title).toBe("clifford");
  });
});
