import React, {useState} from 'react'

function TaskList() {
    const [tasklist , setTaskList] = useState([
        {id:1, name: 'Task 111'},
        {id:2, name: 'Task 2'},
        {id:3, name: 'Task 3'},
    ]);
  return (
    <>
        <h1>Your Task List</h1>

        <div>
            {tasklist && tasklist.map((task, index) => <h2 key={index}> {task.id} :  {task.name}</h2>)}
        </div>

    </>

  )
}

export default TaskList