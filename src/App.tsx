import AddTask from "./components/AddTask"
import EditTask from "./components/EditTask"
import ListItem from "./components/ListItem"
import { useState } from "react"

function App() {

  // define state variable for tasks with sample task
  const [tasks, setTasks] = useState([{
    id: 1,
    task: "Sample Task",
    completed: false,
    createdOn: new Date()
  },])
  const [taskToEdit, setTaskToEdit] = useState({
    id: 0,
    task: "",
  });
  // function to add new task to existing tasks array
  const addNewTask = (taskDetails: string) => {
    const newTask = {
      id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
      task: taskDetails,
      completed: false,
      createdOn: new Date()
    }
    // the spread operator ()...) is used to create a new array with existing tasks and the new task
    setTasks([...tasks, newTask])
  }
  const toggleComplete = (taskId: number) => {
    const updTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, completed: !task.completed }
      }
      return task
    })
    setTasks(updTasks)
  }
  const updTasks = (taskId: number, taskDetails: string) => {
    let updTasks = tasks.map((task) => {
      if (task.id === taskId) 
        task.task = taskDetails
      return task     
    })
    // updTasks[0] = taskDetails
    setTasks(updTasks)
  }
  const deleteTask = (taskId: number) => {
    const updTasks = tasks.filter((task) =>{
      return task.id !== taskId
    })
    setTasks(updTasks)
  }
  // // const editTask = (taskId: number, newDetails: string) => {
  //   const updTasks = tasks.map((task) => {
  //     if (task.id === taskId) {

  return (
    <div className="h-screen w-screen flex justify-center bg-stone-100">
      <div className="flex flex-col items-center m-24 w-3xl">
        <div className="text-2xl">TODO LIST</div>
        <div className="flex w-full justify-between">
          <div>
            <button className="bg-white p-2 rounded-full border-blue-400 border-2 hover:bg-blue-400 hover:text-white cursor-pointer">ADD TASK</button>
          </div>
          <div>
            <select name="filter" id="filterList" className="bg-stone-400 p-2 rounded-full border-stone-700 border-3 hover:bg-stone-200 text-wite cursor-pointer">
              <option defaultValue="all">ALL</option>
              <option value="done">YA DONE</option>
              <option value="unfinished">YA NEED TO COMPLETE</option>
            </select>
          </div>
        </div>
        {/* end btns  */}
        {/* pass add new task function to child component */}
        <AddTask addNewTask={addNewTask} />
        <EditTask taskToEdit={taskToEdit} setTaskToEdit={setTaskToEdit} updateTask={updTasks}
         />
        <div className="bg-slate-300 w-full rounded-4xl mt-4 px-8 py-6">
          {/* iterate over all the elements of the array and pass them to the child component */
            tasks.map((task) => (
              <ListItem key={task.id} task={task}
              delTask={deleteTask} 
              toggleComplete={toggleComplete} setEdit={setTaskToEdit} />
            ))}
        </div>

        {/* end list  */}
      </div>

    </div>
  )
}

export default App
