import React from 'react';
import { useSelector } from 'react-redux';

const Navbar = () => {

  const { tasksList, error } = useSelector((state) => state.tasks)

  return (
    <div>
      <h1 className="text-center my-4 text-primary">Project Management</h1>
      <p className="text-center lead">{`Currently ${tasksList.length} task's Pending`}</p>
      <h5 className='text-center text-danger'>{
        error !== '' ? error : ''
      }</h5>
    </div>
  )
}
export default Navbar;
