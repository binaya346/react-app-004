import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);
    // First one is name of variable.
    // Second one is function that is used to update/change the variable value. 

    const handleIncrese = () => {
        console.log("Increase button clicked")
        setCount(count + 1)
        console.log(count)
    }

    const handleDecrese = (event) => {
        console.log("Decrease button clicked")
        setCount(count - 1)
    }
    console.log("Rerendered again!")

    return (
        <>
            <h1>Count Value: {count}</h1>
            <button onClick={handleIncrese}>Increase</button>
            <button onClick={handleDecrese}>Decrease</button>
        </>
    )
}

export default Counter;