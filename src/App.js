import './App.css';
import Navbar from './components/Navbar';
import Todos from './components/Todos';
import React, { useState } from 'react';
import AddTodos from './components/AddTodos';


function App() {
  const [todos, setTodos] = useState([]);

  const onDelete = (todo) => {
    setTodos(todos.filter((e) => {
      return e !== todo;
    }));
  };

  const addTodo = (title, id) => {
    const myTodo = {
      id: id,
      title: title
    }
    setTodos([...todos, myTodo]);
  };

  return (
    <div className="App">
      <Navbar title="Todos List" />
      <AddTodos addTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete} />
    </div>
  );
}

export default App;
