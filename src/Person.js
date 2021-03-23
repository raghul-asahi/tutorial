import React from 'react'
import './Person.css'

const PersonLists = (props) => {
    return(
        <div className="persons">
            <p>{props.name}</p>
            <p>{props.studies}</p>
            <input type="text" onChange={props.click} value={props.name}/>
        </div>
    )
}

export default PersonLists;