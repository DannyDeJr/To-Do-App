import { format } from "date-and-time";
import DeleteItem from "./DeleteItem";
import TaskStatus from "./TaskStatus";
import EditItem from "./EditItem";

const ListItem = ({ task,delTask, toggleComplete, setEdit }) => {
    return (
        <div className="bg-white my-3 p-4 rounded-lg flex justify-between">
            <div className="flex">
                <TaskStatus taskId={task.id} taskStatus={task.completed} toggleComplete={toggleComplete}/>               
                <div className="flex flex-col ms-2">
                    <span className="font-bold">{task.task}</span>
                    <span>{format(task.createdOn, 'h:mm A, DD/MM/YYYY ')}</span>
                </div>
            </div>
            <div>
                <DeleteItem taskId={task.id} delTask={delTask}/>
                <EditItem taskId={task.id} taskDetails={task.task} setEdit={setEdit} />
            </div>
        </div>
    )
}

export default ListItem