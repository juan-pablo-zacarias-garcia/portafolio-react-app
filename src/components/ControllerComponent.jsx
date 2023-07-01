import { useState } from "react";
const ControllerComponent = () => {
    const [inputValue, setInputValue]= useState("");
    const [error, setError] = useState("");

    const handleInputChange=(event)=>{
        setInputValue(event.target.value);
    }
    const clear =()=>{
       setInputValue("")
    }
    const print = ()=>{
        alert(inputValue);
    }
    const validate=()=>{
        if(inputValue.length>10){
            setError("Elvalor debe ser de menos de 10 caracteres");
        }else{
            alert("El valor debe ser de menos de 10 caracteres "+inputValue);
            setError("");
        }
    }
    return (
        <div className="bg-slate-600 w-screen h-screen items-center justify-center flex">
        <input type="text" value={inputValue} onChange={handleInputChange} className="block mb-2 text-sm font-medium text-green-700 dark:text-green-500" />
        <button onClick={print} className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">Imprimir</button>
        <button onClick={clear} className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">Limpiar</button>
        <button onClick={validate} className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">Validar</button>
        {!!error && <span className="text-red-500">{error}</span>}
        <span> El valor del input es: {inputValue}</span>
    </div>
    );
}
export default ControllerComponent;