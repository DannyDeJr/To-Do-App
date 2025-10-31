import { format } from "date-and-time";
import DeleteItem from "./DeleteItem";

const ListItem = ({ task,delTask }) => {
    return (
        <div className="bg-white my-3 p-4 rounded-lg flex justify-between">
            <div className="flex">
                <i className="fa-regular fa-square text-xl relative top-3"></i>
                <div className="flex flex-col ms-2">
                    <span className="font-bold">{task.task}</span>
                    <span>{format(task.createdOn, 'h:mm A, DD/MM/YYYY ')}</span>
                </div>
            </div>
            <div>
                <DeleteItem taskid={task.id} delTask={delTask}/>
                <i className="fa-solid fa-pen text-xl relative top-3 mx-2"></i>
            </div>
        </div>
    )
}

export default ListItem