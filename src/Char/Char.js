import React from 'react'
import styled from 'styled-components'
const char =(props)=>{
    // const style = {
    //     border:"1px solid #000",
    //     display:"inline-block",
    //     width:"50px",
    //     padding:"25px",
    //     margin:"5px",
    //     transition:"ease 500ms",
    //     ':hover':{
    //         backgroundColor:"red",
    //         color:"#fff",
    //         cursor:"pointer"
    //     }
        
    // }
    const StyledDiv = styled.div`
        border: 1px solid rgb(0, 0, 0);
        display: inline-block;
        width: 50px;
        padding: 25px;
        margin: 5px;
        transition: all 500ms ease 0s;
        background-color:green;
        color:yellow;
        &:hover{
            background-color:red;
            color:white;
            cursor:pointer;
        }
        p{
            text-align:center;
        }
    `;
    return(
        <StyledDiv onClick={props.click}>
            <p>{props.name === " " ? "-" : props.name}</p>
        </StyledDiv>
    )
}
export default char;