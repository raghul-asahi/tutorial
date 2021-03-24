import React from 'react';
import './ListInput.css'

const listInput = (props) =>{
    
    return (
        <div className="inputStyle">
            <input type="text" onChange={props.change} value={props.value} />
            <button onClick={props.click} disabled={props.data}>Add</button>
        </div>
    )
}
export default listInput