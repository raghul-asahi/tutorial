import React from 'react'

const outputStyle = {
    textTransform:"uppercase",
    color:"#0e0e0e",
    textAlign:"center",
    minHeight:"40px"
}
const userOutput = (props) => <h1 style={outputStyle}>{props.default}</h1>

export default userOutput;