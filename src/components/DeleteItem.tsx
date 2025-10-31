

const DeleteItem = ({ taskid, delTask }) => {
  const handleDelete = () => {
    delTask(taskid);
  };

  return (
    <>
    <i className="fa-solid fa-trash text-xl relative top-3 mx-2 cursor-pointer" onClick={handleDelete}></i>
        </>
  )
}

export default DeleteItem