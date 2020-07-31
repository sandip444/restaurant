import React, { Component } from "react";
import { Table } from "react-bootstrap";
import NavbarMenu from "./NavbarMenu";

import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
export default class RestoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: null,
    };
  }
  componentDidMount() {
    this.getData();
  }
  getData() {
    fetch("http://localhost:3000/posts").then((response) => {
      response.json().then((result) => {
        this.setState({ list: result });
      });
    });
  }
  Delete(id) {
    fetch("http://localhost:3000/posts/" + id, {
      method: "DELETE",
    }).then((result) => {
      result.json().then((resp) => {
        alert("Delete Restaurant Detail");
        this.getData();
      });
    });
  }
  render() {
    const linkStyl = {
      color: "red",
      backgroundColor: "transparent",
      marginLeft: "10px",
    };
    return (
      <div>
        <NavbarMenu />
        <h1>Restaurant List</h1>
        {this.state.list ? (
          <div>
            <Table striped bordered hover variant="dark">
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
                {this.state.list.map((item, i) => (
                  <tr>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.address}</td>
                    <td>{item.rating}</td>
                    <td>{item.email}</td>
                    <td>
                      <Link to={"/Update/" + item.id}>
                        <FontAwesomeIcon icon={faEdit} color="orange" />
                      </Link>
                      <span
                        onClick={() => {
                          this.Delete(item.id);
                        }}
                      >
                        <FontAwesomeIcon icon={faTrash} style={linkStyl} />
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        ) : (
          <h3>Please wait....</h3>
        )}
      </div>
    );
  }
}
