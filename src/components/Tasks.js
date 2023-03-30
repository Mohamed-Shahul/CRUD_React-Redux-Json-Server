import Task1 from "./Task1"
const Tasks = ({tasks}) => {
  
  return (
    <div className='tasks'>
      {tasks.map((task)=>(
        // <h3 key={task.id}>{task.text}</h3>
        <Task1 key={task.id} task={task}/>
      ))}
      
    </div>
  )
}

export default Tasks
