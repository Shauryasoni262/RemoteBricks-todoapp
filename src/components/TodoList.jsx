import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodo, updateTodo } from '../store/todoSlice';
import '../styles/TodoList.css';

export default function TodoList() {
  const [text, setText] = useState('');
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (text.trim()) {
      dispatch(addTodo({ id: Date.now(), text }));
      setText('');
    }
  };

  const handleUpdate = (id, newText) => {
    dispatch(updateTodo({ id, text: newText }));
  };

  return (
    <div className="todo-container">
      <h2>Todo List</h2>
      <div>
        <input
          type="text"
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder="Add a todo"
        />
        <button onClick={handleAdd}>Add</button>
      </div>
      <ul className="todo-list">
        {todos.map(todo => (
          <li key={todo.id} className="todo-item">
            <span>{todo.text}</span>
            <div>
              <button onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
              <button onClick={() => handleUpdate(todo.id, prompt('Update Todo:', todo.text))}>
                Update
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
