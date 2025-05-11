import Button from "./Button";
import { ITaskProps } from "../redux/types";

const Task = (props:ITaskProps) =>{
    return(
        <div className="flex items-center justify-between ml-2" >
            <input value={props.name} type="text" readOnly={true} className="bg-white w-md text-lg m-2 rounded-md p-1"></input>
            <Button title="Редактировать" func={props.func1} classname="bg-blue-700 border-2 border-white rounded-md text-black p-2 m-2" ></Button>
            <Button title="Удалить" func={props.func2} classname="bg-red-700 border-2 border-white rounded-md text-black p-2 m-2" ></Button>
        </div>
    );
};

export default Task;