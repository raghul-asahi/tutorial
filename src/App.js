import React, { Component } from 'react';
import PersonLists from './Person';
import Input from './UserInput/Input';
import Output from './UserOutput/Output'
import Validation from './Validation/Validation';
import Char from './Char/Char'
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
    profiles : [
      {
        name: 'Jane Doe',
        'favorite-game': 'Stardew Valley',
        subscriber: false
      },
      {
        name: 'John Doe',
        'favorite-game': 'Dragon Quest XI',
        subscriber: true
      }
    ]
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
  onRemoveHandler = (profileIndex) =>{
    const profiles = [...this.state.profiles];
    profiles.splice(profileIndex,1);
    this.setState({profiles:profiles})
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
      padding:"12px",
      display:"block",
      margin:"10px auto"
    }
    const subButton ={
      backgroundColor:"green",
      color:"#fff",
      padding:"15px 25px"
    }
    const noSubButton ={
      backgroundColor:"red",
      color:"#fff",
      padding:"15px 25px"
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
        
        <div>
          {this.state.profiles.map((profile,index) => {
            return(
              <div key={index} style={{textAlign :"center"}}>
              <h1>{profile.name}</h1>
              <p>{profile['favorite-game']}</p>
              <button style={profile.subscriber ? subButton : noSubButton}>{profile.subscriber ? "Subscribed" : "Not-Subscribed"}</button>
              <button style={btnStyle} onClick={()=>this.onRemoveHandler(index)}>Remove</button>
              </div>
            )
          })}
        </div>
      </div>
      
    )
  }
}

class SplitApp extends Component{
  state={
    userInput:""
  }
  inputEventHandler = (event) => {
    const currentValue = event.target.value
    this.setState({
      userInput:currentValue
    })
    console.log(currentValue.split(""))
  }
  deleteCharHandler = (index) =>{
    const text = this.state.userInput.split("");
    text.splice(index, 1);
    const joinText = text.join("");
    this.setState({userInput:joinText})

  }
  
  render(){
    const charList = this.state.userInput.split("").map((char, index) => {
      return <Char 
      key={index} 
      name={char} 
      click={()=> this.deleteCharHandler(index)}
      />
    })
    return(
      <div >
        <input type="text" onChange={this.inputEventHandler} value={this.state.userInput}/>
        <p>{this.state.userInput}</p>
        <Validation count={this.state.userInput.length}/>
        {charList}
      </div>
    )
  }
}

export default SplitApp;
