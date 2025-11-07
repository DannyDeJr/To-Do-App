
const EditItem = ({ taskId, taskDetails, setEdit }) => {
    const handleSetEdit = () => {
        setEdit({ id: taskId, task: taskDetails });
    }

    return (
        <>
            <i className="fa-solid fa-pen cursor-pointer text-xl relative top-3 mx-2" onClick={handleSetEdit}></i>
            <div className="w-6/8">
           
        </div>
        </>
    )
}

export default EditItem