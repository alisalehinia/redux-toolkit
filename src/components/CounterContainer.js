import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../features/counter/counterSlice";
const CounterContainer = () => {
    const [number, setNumber] = useState("");

    const count = useSelector(state => state.counter);
    const dispatch = useDispatch();

    return (
        <div>
            <h4>counter : {count.value}</h4>
            <input type="text" value={number} onChange={(e) => setNumber(e.target.value)} />
            <button onClick={() => { dispatch(increment(Number(number) | 0)) }}>inc</button>
            <button onClick={() => { dispatch(decrement(Number(number) | 0)) }}>dec</button>
        </div>
    );
}

export default CounterContainer;