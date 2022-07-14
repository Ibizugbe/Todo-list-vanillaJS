export const addTodo = (title, completed = false) => {
  const listArray = [];
  const newTodo = {
    id: listArray.length,
    title,
    completed,
  };
  listArray.push(newTodo);
  return listArray.length;
};

export const deleteTodo = (id) => {
  const listArray = [
    {
      id: 0,
      title: 'first-task',
      completed: false,
    },
    {
      id: 1,
      title: 'second-task',
      completed: false,
    },
    {
      id: 2,
      title: 'third-task',
      completed: false,
    },
  ];

  return listArray.filter((item) => item.id !== id);
};

export const updateTodo = (id, title, completed) => {
  const listArray = [
    {
      id: 0,
      title: 'first-task',
      completed: false,
    },
    {
      id: 1,
      title: 'second-task',
      completed: false,
    },
    {
      id: 2,
      title: 'third-task',
      completed: false,
    },
  ];
  const itemIndex = listArray.findIndex((todo) => todo.id === Number(id));
  listArray[itemIndex] = { ...listArray[itemIndex], title, completed };
  return listArray[itemIndex];
};

export const removeTodo = (list) => list.filter((todo) => todo.completed === false);
