

const DeleteItem = ({ taskId, delTask }) => {
  const handleDelete = () => {
    delTask(taskId);
  };

  return (
    <>
    <i className="fa-solid fa-trash text-xl relative top-3 mx-2 cursor-pointer" onClick={handleDelete}></i>
        </>
  )
}

export default DeleteItem