import { useDispatch, useSelector } from "react-redux";
import { fetchPostsAsync, deletePostsAsync, removePost } from "./postsSlice";
import { TPost } from "../../app/types";
import { useEffect, useState } from "react";
import PostItem from "../../components/PostItem";
import store from "../../app/store";
import PostForm from "../../components/PostForm";

function Posts() {
    const dispatch = useDispatch<typeof store.dispatch>();
    const allPosts = useSelector((state: { posts: { posts: TPost[] } }) => state.posts.posts);
    const [curTitle, setCurTitle] = useState<string>("");
    const [curBody, setCurBody] = useState<string>("");
    const [curEditId, setCurEditId] = useState<number | null>(null);
    const [isEdit, setEdit] = useState<boolean>(false);

    useEffect(() => {
        dispatch(fetchPostsAsync());
    }, [dispatch]);

    const SetEditFunc = (id: number, title: string, body: string) => {
        setCurTitle(title);
        setCurBody(body);
        setCurEditId(id);
        setEdit(true);
    };

    const DeleteFunc = (id: number) => {
        dispatch(deletePostsAsync(id)).then(() => {
            dispatch(removePost(id)); 
        });
    };

    return (
        <div>
            <PostForm 
                forEdit={[isEdit, setEdit]} 
                existingPost={[curEditId, setCurEditId]} 
                workWithBody={[curBody, setCurBody]} 
                workWithTitle={[curTitle, setCurTitle]} 
            />
            {Array.isArray(allPosts) && allPosts.map(p => (
                <PostItem 
                    key={p.id} 
                    {...p} 
                    setEdit={() => SetEditFunc(p.id, p.title, p.body)} 
                    delFunc={() => DeleteFunc(p.id)} 
                />
            ))}
        </div>
    );
}

export default Posts;