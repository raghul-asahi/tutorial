import React from 'react'

const inputStyle = {
    padding: "10px",
    fontSize:"25px",
    border:"1px solid #ddd",
    width:"-webkit-fill-available"
}
const userInput = (props) => <input type="text" style={inputStyle} onChange={props.change} value={props.default}/>

export default userInput;