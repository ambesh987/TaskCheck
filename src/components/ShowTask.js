import React from 'react';
import './ShowTask.css';


function ShowTask({tasklist,setTasklist,task,setTask}) {
    const handleEdit = (id) =>{
        const selectedTask = tasklist.find(todo=> todo.id===id);
        setTask(selectedTask);
    }

    const handleDelete =(id) =>{
        const updatedTasklist = tasklist.filter(todo=> todo.id!==id);
        setTasklist(updatedTasklist);
    }

  return (
    <section className='showTask'>
        <div className='head'>
            <div className='title'>Todo</div>
            <div className='count'>{tasklist.length}</div>
        </div>
        <button className='clearAll' onClick={()=>setTasklist([])}>Clear All</button>

        <ul>
            {
                tasklist.map((todo) => (
                    <li key={todo.id}>
                        <p>
                            <span className='name'>{todo.name}</span>
                            <span className='time'>{todo.time}</span>
                        </p>
                        <i onClick={()=>handleEdit(todo.id)} className='bi bi-pencil-square'></i>
                        <i onClick={()=>handleDelete(todo.id)}className='bi bi-trash'></i>
                    </li>
                ))
            }
        </ul>
    </section>
  )
}

export default ShowTask
