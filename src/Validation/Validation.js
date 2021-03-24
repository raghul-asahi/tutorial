import React from 'react'
import styled from 'styled-components'


const validation = (props) => {
    const StyledP = styled.p`
        background-color:${props => props.alt <= 5 ? "red" : "green"};
        color:#fff;
        padding:10px;
        display:block;
        width:150px;
        margin:15px;
    `;
    let countText = "Less Letter";
    if(props.count > 5){
        countText = "Correct Letter"
    }
    if(props.count === 0){
        countText = "Enter the Value"
    }
    return <StyledP alt={props.count}>{countText}</StyledP>
}

export default validation