
import PropTypes from "prop-types"


export const CounterApp = ({ value = 4 }) => {
    

    return <>
    
        <h1>CounterAPP</h1>
        <h2>El valor es: {value}</h2>
    
    </>


}


CounterApp.propTypes  = {
    value: PropTypes.number.isRequired,
}

