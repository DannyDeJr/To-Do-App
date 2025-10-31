const TaskStatus = ({taskId, taskStatus, toggleComplete}) => {
  const handleToggle = () => {
    toggleComplete(taskId)
  }

  return (
    <button onClick={handleToggle}>
        {taskStatus ? <i className="fa-regular fa-square-check cursor-pointer text-xl relative top-3"></i> 
        : 
        <i className="fa-regular fa-square cursor-pointer text-xl relative top-3"></i>}
      
    </button>
  )
}

export default TaskStatus