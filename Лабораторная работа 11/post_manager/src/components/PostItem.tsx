import { TPost } from "../app/types";
import Button from "./Button";

interface NewProps extends TPost {
    setEdit: (post: { id: number; title: string; body: string }) => void;
    delFunc: (id:number) => void;
}

function PostItem(props:NewProps){
    return(
        <div>
            <h2>{props.title}</h2>
            <div>{props.body}</div>
            <Button func={() => props.setEdit({id:props.id, title:props.title, body:props.body})} title="Редактировать"></Button>
            <Button func={() => props.delFunc(props.id)} title="Удалить"></Button>
        </div>
    )

}

export default PostItem;