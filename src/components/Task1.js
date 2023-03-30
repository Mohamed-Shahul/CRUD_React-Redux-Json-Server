import { FaTimes } from 'react-icons/fa'
const Task1 = ({task}) => {
  return (
    <div className='Task1'>
      <h3>
        {task.text} <FaTimes style={{color:'red',cursor:'pointer'}}/>
        </h3>
      <p>{task.day}</p>

     
    </div>
  )
}

export default Task1
