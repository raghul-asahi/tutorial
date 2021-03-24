import React from 'react'
const listOutput = (props) =>{
    return <li>{props.name} <button onClick={props.deleteclick}>X</button></li>
}
export default listOutput