import React, { Component } from 'react';
import PersonLists from './Person';
import Input from './UserInput/Input';
import Output from './UserOutput/Output'
import './App.css';

class App extends Component {
  state ={
    persons:[
      {
        name:"Raghul",
        studies: "BCA"
      },
      {
        name:"Balaji",
        studies: "BE"
      }
    ]
  }
  onClickEventHandler = (event) => {
    this.setState({
      persons:[
        {
          name:"Sanjeev",
          studies: "BCA"
        },
        {
          name:event.target.value,
          studies: "BE"
        }
      ]
    })
  }
  
  render() {
    const buttonStyle = {
      backgroundColor:"black",
      color:"white"
    }
    return (
      <div className="App">
        <button style={buttonStyle}  onClick={this.onClickEventHandler}>Click Me</button>
        <PersonLists studies={this.state.persons[0].studies} name={this.state.persons[0].name}/>
        <PersonLists 
        studies={this.state.persons[1].studies}
         name={this.state.persons[1].name}
         click={this.onClickEventHandler}
         />
      </div>
    );
  }
}

class UserApp extends Component{
  state={
    defaultOutput : "Raghul",
    containerVisible : false,
    
  }
  onChangeEventHandler = (event) => {
    this.setState({
      defaultOutput: event.target.value
    })
  }
  onClickShowHandler = () =>{
      
      this.setState({
        containerVisible: !this.state.containerVisible
      })
    }
    
  render(){
    const userAppStyle ={
      width:"250px",
      border:"1px solid #ddd",
      padding:"10px",
      margin:"20px auto",
      
    }
    const btnStyle ={
      minWidth:"150px",
      border:"1px solid #ddd",
      color:"yellow",
      backgroundColor:"#000",
      padding:"10px",
      display:"block",
      margin:"10px auto"
    }
    let containerBox = null;
    if(this.state.containerVisible){
      containerBox = (
            <div style={userAppStyle} >
              <Output default={this.state.defaultOutput}/>
              <Input change={this.onChangeEventHandler} default={this.state.defaultOutput} />

            </div>
      )
    }
    return(
      <div className="userapp">
        <button style={btnStyle} onClick={this.onClickShowHandler}>{this.state.containerVisible ? "Click to hide" : "Click to show"}</button>
        {containerBox}
      </div>
    )
  }
}

export default UserApp;
