import { IButtonProps } from "../redux/types";

const Button = (props:IButtonProps) =>{
    return(
        <button onClick={props.func} className={props.classname}>
            {props.title}
        </button>
    );
};

export default Button;