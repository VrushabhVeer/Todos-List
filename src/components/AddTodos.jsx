import React from 'react'
import { useState } from 'react';

const AddTodos = ({addTodo}) => {

    const [title, setTitle] = useState('');

    const submit = (e) =>{
        e.preventDefault();
        if(!title)
        {
            alert("Add Something");
        }
        addTodo(title);
    }

    return (
        <div className='container' >
            <form onSubmit={submit}>
                <div className="mb-2">
                    <input type="text" className="form-control" id="tilte" value={title} onChange={(e)=>{setTitle(e.target.value)}} aria-describedby="emailHelp" placeholder='Add Todos here...'/>
                </div>

                <button type="submit" className="btn btn-sm btn-success">Submit</button>
            </form>
        </div>
    )
};

export default AddTodos;