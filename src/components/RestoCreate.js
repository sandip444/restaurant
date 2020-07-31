import React, { Component } from 'react'
import NavbarMenu from "./NavbarMenu"

export default class RestoCreate extends Component {
  constructor(){
    super();
    this.state={
      name:null,
      address:null,
      rating:null,
      email:null,
    }
  }

  Create(){
  fetch("http://localhost:3000/posts",{
    method:"Post",
    headers:{
      'content-Type':'application/json'
    },
    body:JSON.stringify(this.state)
  }).then((result) => {
    result.json().then((resp) => {
      alert("Add Restaurant Detail")
    })
  })
  }
  render(){
    return(
      <div>
      <NavbarMenu />
          <h1>Restaurant Create</h1>
          <div>
          <input type="text" Name="name" placeholder="Name" onChange={(e)=>{this.setState({name:e.target.value})}}/><br/><br/>
          <input type="text" Name="address" placeholder="Restaurant Address" onChange={(e)=>{this.setState({address:e.target.value})}}/><br/><br/>
          <input type="number" Name="rating" placeholder="Restaurant Rating" onChange={(e)=>{this.setState({rating:e.target.value})}}/><br/><br/>
          <input type="Email" Name="email" placeholder="Restaurant Email" onChange={(e)=>{this.setState({email:e.target.value})}}/><br/><br/>
          <button type="button" onClick={()=>{this.Create()}} >Add Restaurant</button>
          </div>
      </div>
    )
  }
}
