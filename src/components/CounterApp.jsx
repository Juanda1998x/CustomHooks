import { useCounter } from "../Hoocks/useCounter"

export const CounterApp = () => {

    const { counter, increment, reset, decrement } = useCounter(0);

    return (
        <>
            <h1>Contador</h1>
            <h4>{counter}</h4>
            <button className="btn btn-primary" onClick={() => increment()}>+1</button>
            <button className="btn btn-danger" onClick={() => reset()}>reset</button>
            <button className="btn btn-primary" onClick={() => decrement()}>-1</button>

        </>
    )
}
