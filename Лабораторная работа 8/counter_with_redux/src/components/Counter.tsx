import { useSelector, useDispatch } from "react-redux";
import { incrementAction, decrementAction, resetAction } from "../redux/actions";
import { CurrentCounterState, TypesOfActions } from "../redux/types";
import Button from "./Button";
import { Dispatch } from "redux";

function Counter() {
    const curCount = useSelector((state: CurrentCounterState) => state.count);
    const dispatch = useDispatch<Dispatch<TypesOfActions>>();

    const IncrementFunc = () => {
        dispatch(incrementAction(1));
    };

    const DecrementFunc = () => {
        dispatch(decrementAction(1));
    };

    const ResetFunc = () => {
        dispatch(resetAction());
    };

    return (
        <div className="bg-black w-xl rounded-3xl h-96">
            <h1 className="mb-28 pt-11 text-white">{curCount}</h1>
            <Button classname="bg-red-600 border-2 border-white rounded-md w-24 h-10 mr-4 text-white hover:bg-gray-600" func={IncrementFunc} title="Increment" />
            <Button classname="bg-blue-900 border-2 border-white rounded-md w-24 h-10 mr-4 text-white hover:bg-gray-600" func={DecrementFunc} title="Decrement" />
            <Button classname="bg-gray-900 border-2 border-white rounded-md w-24 h-10 mr-4 text-white hover:bg-gray-600" func={ResetFunc} title="Reset" />
        </div>
    );
}

export default Counter;