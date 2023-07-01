import { useRef } from "react";

const RefComponent = ()=>{
    const inputRef = useRef();
    const focus=()=>{
        console.log(inputRef);
        inputRef.current.focus();
    }
    const clear =()=>{
        inputRef.current.value="";
    }
    const print = ()=>{
        alert(inputRef.current.value);
    }
return (
    <div className="bg-slate-600 w-screen h-screen items-center justify-center flex">
        <input type="text" id="input-test" ref={inputRef} className="block mb-2 text-sm font-medium text-green-700 dark:text-green-500" />
        <button onClick={focus} className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">Focus</button>
        <button onClick={clear} className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">Limpiar</button>
        <button onClick={print} className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">Imprimir</button>
    </div>
);
};

export default RefComponent;