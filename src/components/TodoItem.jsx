import React from 'react';


const TodoItem = ({ todo, onDelete }) => {
  return (
    <div>
      <div className='todos'>
        <p>{todo.title}</p>
        <button className='btn btn-sm btn-danger' onClick={() => {onDelete(todo)}}> ✘ </button>
      </div>
    </div>
  )
}

export default TodoItem;