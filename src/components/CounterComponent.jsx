import useCounter from "../hooks/useCounter";

const CounterComponent=() =>{
    const {counter, increment, decrement} = useCounter();
return (
    <div className="bg-white">
        <h1>Counter component</h1>
        <h1>{counter}</h1>
        <div>
            <button onClick={increment}>Incrementar</button>
            <button onClick={decrement}>Decrementar</button>
        </div>
    </div>
)
}
export default CounterComponent;