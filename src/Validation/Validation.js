import React from 'react'



const validation = (props) => {
    let countText = "Less Letter";
    if(props.count > 5){
        countText = "Correct Letter"
    }
    return <p>{countText}</p>
}

export default validation