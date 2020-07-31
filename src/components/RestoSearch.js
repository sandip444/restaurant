import React, { Component } from 'react'
import {Table}  from "react-bootstrap"
import {Link}  from "react-router-dom"
import {InputGroup,Button,FormControl,Container}  from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import NavbarMenu from "./NavbarMenu"

import { faSearch,faEdit,faTrash } from '@fortawesome/free-solid-svg-icons'
export default class RestoSearch extends Component {
  constructor(){
    super();
    this.state={
      searchData:null,
      noData:false,
      lastSearch:""
    }
  }
  Search(key){
         this.setState({lastSearch:key})
    fetch("http://localhost:3000/posts?q="+key)
      .then((result) => {result.json().then((resp) => {
      if(resp.length>0){
        this.setState({searchData:resp,noData:false})
      }
      else{
        this.setState({noData:true,searchData:null})
      }


      })
    })
  }
  Delete(id){
    fetch("http://localhost:3000/posts/"+id,{
      method:"DELETE",

    }).then((result) => {
      result.json().then((resp) => {
        alert("Delete Restaurant Detail");
        this.search(this.state.lastSearch)
      })
    })
  }
  render(){
    const linkStyl ={
      color:"red",
      backgroundColor:"transparent",
      marginLeft:"10px"
    }
    return(
      <Container>
      <NavbarMenu />
          <h1>Restaurant Search</h1>
          <InputGroup className="mb-3" style={{marginTop:"20px"}}>
             <InputGroup.Prepend>
               <Button variant="outline-secondary"><FontAwesomeIcon icon={faSearch} /> Auto Search</Button>
             </InputGroup.Prepend>
             <FormControl aria-describedby="basic-addon1" onChange={(e)=>this.Search(e.target.value)}/>
           </InputGroup>

           <div>

                  {
                    this.state.searchData?
                    <div><Table striped bordered hover variant="dark">
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Rating</th>
                        <th>Email</th>
                        <th>Operation</th>
                      </tr>
                    </thead>
                    <tbody>
                           {
                             this.state.searchData.map((item)=>
                             <tr>
                               <td>{item.id}</td>
                               <td>{item.name}</td>
                               <td>{item.address}</td>
                                 <td>{item.rating}</td>
                               <td>{item.email}</td>
                               <td><Link to={"/Update/"+item.id}><FontAwesomeIcon icon={faEdit} color="orange" /></Link>
                         <span onClick={()=>{this.Delete(item.id)}}><FontAwesomeIcon icon={faTrash} style={linkStyl} /></span>
                               </td>
                             </tr>
                           )

                           }
                           </tbody>
                           </Table>
                    </div>:
                    ""
                  }
                  {
                    this.state.noData?<h4>No Data Found</h4>:null
                  }
           </div>
      </Container>
    )
  }
}
