// destructuring props directly in the function parameters
const AddTask = ({ addNewTask }) => {
    // the e parameter represents the event object
    const handleSubmit = (e) => {
        e.preventDefault()
        // check if the input field is empty
        if (!e.currentTarget.form.task.value)
            return
        addNewTask(e.currentTarget.form.task.value)
        e.currentTarget.form.task.value = ""
    }

    return (
        <div className="w-6/8">
            <form>
                <div>
                    <label htmlFor="task" className="block mb-2 text-xl font-medium text-gray-300 dark:text-black">Task</label>
                    <input type="text" id="task" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-2 cursor-pointer dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                </div>
                <div className="border-blue-400 border-2 w-32 p-2 text-center rounded-lg hover:bg-blue-400 hover:text-white">
                    <button className="cursor-pointer" type="submit" onClick={handleSubmit}>Add New Task</button>
                </div>
            </form>
        </div>
    )
}

export default AddTask