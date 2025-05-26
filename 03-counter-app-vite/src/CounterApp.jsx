
import PropTypes from "prop-types"
import { useState } from "react";



export const CounterApp = ({ value = 4 }) => {

    const [counter, setCounter] = useState(value);

    //FUNCIONES
    //AGREGAR
    const handleAdd = () => { setCounter((c) => c + 1); };
    //SUBTRACT
    const handleSubtract = () => {
        if (counter > 0) {
            setCounter((c) => c - 1);
        }
    }
        
        //RESET
        const handleReset = () => { setCounter((c) => (c * 0)) }


    
        return <>
    
            <h1>CounterAPP</h1>
            <h2>{counter}</h2>
            <button onClick={handleAdd}> +1</button >
            <button onClick={handleSubtract}> --1</button>
            <button onClick={handleReset}>Reset</button>
    
        </>


    }


    CounterApp.propTypes = {
        value: PropTypes.number.isRequired,
    }

