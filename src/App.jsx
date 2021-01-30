import React, { useState } from 'react';

import TodoForm from './TodoForm';
import TodoList from './TodoList';

export default function App() {
  const [state, setState] = useState({
    todoTitle: '',
    todoItems: [],
  });

  const { todoTitle, todoItems } = state;

  function handleChangeTodo(event) {
    setState({
      ...state,
      todoTitle: event.target.value,
    });
  }

  function handleClickAddTodo() {
    setState({
      todoTitle: '',
      todoItems: [...todoItems, { id: new Date(), contents: todoTitle }],
    });
  }

  function handleClickDelete(id) {
    setState({
      ...state,
      todoItems: todoItems.filter((todoItem) => todoItem.id !== id),
    });
  }

  return (
    <div>
      <p>To do list</p>
      <TodoForm
        todoTitle={todoTitle}
        onChangeTodo={handleChangeTodo}
        onClickAddTodo={handleClickAddTodo}
      />
      <TodoList
        todoItems={todoItems}
        onClickDelete={handleClickDelete}
      />
    </div>
  );
}
