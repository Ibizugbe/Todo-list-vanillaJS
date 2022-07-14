/**
 * @jest-environment jsdom
 */
import { addTodo, deleteTodo, removeTodo } from "./myTasks";
// test for add and remove

describe("add_delete_test", () => {
  it("add_delete_Todo", () => {
    const listArray = [
      {
        id: 0,
        title: "first-test",
        completed: false,
      },
      {
        id: 1,
        title: "second-test",
        completed: false,
      },
      {
        id: 2,
        title: "third-test",
        completed: false,
      },
    ];
    const quest = (id) => listArray.filter((item) => item.id !== id);

    expect(addTodo("first-test")).toBe(1);
    expect(addTodo("second-test")).toBe(1);
    expect(addTodo("third-test")).toBe(1);
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
