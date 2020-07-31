import React, { Component } from 'react'
import NavbarMenu from "./NavbarMenu"

export default class Login extends Component {
  constructor(props){
    super(props);
    this.state={
      name:'',
      password:'',
      noData:false,
    }
  }
  login(){
    console.log(this.state)

fetch("http://localhost:3000/login?q="+this.state.name)
 .then((result) => {result.json().then((resp) => {
 if(resp.length>0){
  localStorage.setItem('login',JSON.stringify(resp))
  console.warn(this.props.history.push('list'))
 }
 else{
   alert("Please Check Your Username And password")
 }


 })
})
  }
  render(){
    return(
      <div>
      <NavbarMenu />
          <h1>Login user</h1><br/>
          <input type="text" name="user" onChange={(e)=>{this.setState({name:e.target.value})}}  /><br/><br/>
          <input type="password" name="password" onChange={(e)=>{this.setState({password:e.target.value})}}  /><br/><br/>

          <button type="button" onClick={()=>{this.login()}}>Log in</button>
      </div>
    )
  }
}
