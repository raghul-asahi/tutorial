import React, { Component } from 'react';
import PersonLists from './Person';
import Input from './UserInput/Input';
import Output from './UserOutput/Output'
import Validation from './Validation/Validation';
import Char from './Char/Char'
import './App.css';
import ListInput from './ListInput/ListInput';
import ListOutput from './ListOutput/ListOutput'; 
import styled from 'styled-components';

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
    const inputStyle={
      fontSize:"18px",
      padding:"10px",
      margin:"15px",
      border:"1px solid #ddd",
      width:"auto"
    }
    return(
      <div >
        <input style={inputStyle} type="text" onChange={this.inputEventHandler} value={this.state.userInput}/>
        <p style={inputStyle}>{this.state.userInput}</p>
        <Validation count={this.state.userInput.length}/>
        {charList}
      </div>
    )
  }
}

class ListApp extends Component{
  state={
    
    newfruits:[],
    currentValue :"",
    buttonDisable:true
  }
  onListChangeHandler = (event) =>{
    const listValue = event.target.value;  
    // console.log(listValue);
    this.setState({currentValue:listValue})
    // console.log(this.state.currentValue)
    this.setState({buttonDisable:false})
    
  }
  onListClickHandler =(event) =>{    
    const currentChangeValue = this.state.currentValue;
    const newfruits = this.state.newfruits;
    this.setState({currentValue:currentChangeValue})
    this.setState({newfruits:[...newfruits, currentChangeValue]})
    // console.log(this.state.newfruits)
    this.setState({currentValue:""})
    this.setState({buttonDisable:true})
  }
  onListDeleteHandler = (index) => {
      
      const cutFruits = this.state.newfruits;
      cutFruits.splice(index,1);
      this.setState({newfruits:cutFruits})
      console.log(cutFruits);
  }
  render(){
    const mainStyle = {
      textAlign:"center",
      maxWidth:"500px",
      margin:"100px auto",
      minHeight:"500px",
      padding:"30px",
      backgroundColor:"#000"
    }
    return(
      <div style={mainStyle}>
        <h1 style={{color:"#fff"}}>Listing Example</h1>
        <ListInput click={this.onListClickHandler} data={this.state.buttonDisable} change={this.onListChangeHandler} value={this.state.currentValue}/>
        
        <ul className="listStyle">
          {this.state.newfruits.map((fruit,index) =>{ 
          return <ListOutput 
          key={index} 
          name={fruit}
          deleteclick={() => this.onListDeleteHandler(index)}
          
          />})}
        </ul>
        
      </div>
      
    )
  }
}

export default ListApp;
