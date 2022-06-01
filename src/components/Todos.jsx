import React from 'react';
import TodoItem from './TodoItem';

const Todos = (props) => {

  return (
    <div className='container'>
      <div className='main'>
        <p className='todolist'>Todos List</p>
        {props.todos.length === 0 ? "No Todos to here..." :
          props.todos.map((todo) => {
            return <TodoItem todo={todo} key={todo.id} onDelete={props.onDelete} />
          })
        }
      </div>
    </div>
  )
}

export default Todos;