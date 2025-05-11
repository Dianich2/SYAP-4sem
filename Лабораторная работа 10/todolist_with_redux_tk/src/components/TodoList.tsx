import { useSelector, useDispatch } from "react-redux";
import { ITask } from "../redux tk/types";
import Button from "./Button";
import { Dispatch } from "redux";
import { useState } from "react";
import Task from "./Task";
import { ADD_TODO, DELETE_TODO, EDIT_TODO, TOGGLE_TODO } from "../redux tk/reducer";

function TodoList() {
    const curTasks = useSelector((state: {todolist:{tasks:Array<ITask>, curId:number}}) => state.todolist.tasks);
    const dispatch = useDispatch<Dispatch>();

    const [inp, setInp] = useState<string>("")
    const [curEditId, setEditId] = useState<number>(0)
    const [isEdit, setEdit] = useState<boolean>(false)

    const AddFunc = () => {
        if(inp.trim()){
            dispatch(ADD_TODO(inp.trim()));
            setInp("")
        }
    };

    const SetEditFunc = (id:number, name:string) => {
        setInp(name)
        setEditId(id)
        setEdit(true)
    };

    const EditFunc = () =>{
        if(inp.trim()){
            dispatch(EDIT_TODO({id:curEditId, updatename:inp.trim()}));
            setEdit(false)
            setInp("")
        }
    }

    const DeleteFunc = (id:number) => {
        dispatch(DELETE_TODO(id));
    };

    const ToggleFunc = (id:number) => {
        dispatch(TOGGLE_TODO(id));
    };

    return (
        <div className="bg-black w-3xl rounded-3xl h-auto">
            <input className="bg-white w-lg" type="text" value={inp} onChange={(e) => setInp(e.target.value)}></input>
            <Button title={isEdit ? "Изменить" : "Добавить"} func={isEdit ? () => EditFunc() : () => AddFunc()} classname="bg-green-700 border-2 border-white rounded-md text-black p-2 m-2"></Button>
            <ul>
                {curTasks.map((t) => (
                    <li key={t.id} className={t.isDone ? "line-through flex-row flex justify-center" : "flex-row flex justify-center"}>
                        <input type="checkbox" checked={t.isDone} onChange={() => ToggleFunc(t.id)} className="w-8"/>
                        <Task name={t.name} isDone={t.isDone} func1={() => SetEditFunc(t.id, t.name)} func2={() => DeleteFunc(t.id)}></Task>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;