import React, { Component } from "react";
import NavbarMenu from "./NavbarMenu";

export default class RestoUpdate extends Component {
  constructor() {
    super();
    this.state = {
      name: null,
      address: null,
      rating: null,
      email: null,
      id: null,
    };
  }
  componentDidMount() {
    fetch("http://localhost:3000/posts/" + this.props.match.params.id).then(
      (response) => {
        response.json().then((result) => {
          this.setState({
            name: result.name,
            id: result.id,
            rating: result.rating,
            address: result.address,
            email: result.email,
          });
        });
      }
    );
  }
  Update() {
    fetch("http://localhost:3000/posts/" + this.state.id, {
      method: "Put",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(this.state),
    }).then((result) => {
      result.json().then((resp) => {
        alert("Update Restaurant Detail");
      });
    });
  }
  render() {
    console.log(this.props.match.params.id);
    return (
      <div>
        <NavbarMenu />
        <h1>Restaurant Update</h1>
        <div>
          <input
            type="text"
            Name="name"
            value={this.state.name}
            placeholder="Name"
            onChange={(e) => {
              this.setState({ name: e.target.value });
            }}
          />
          <br />
          <br />
          <input
            type="text"
            Name="address"
            value={this.state.address}
            placeholder="Restaurant Address"
            onChange={(e) => {
              this.setState({ address: e.target.value });
            }}
          />
          <br />
          <br />
          <input
            type="number"
            Name="rating"
            value={this.state.rating}
            placeholder="Restaurant Rating"
            onChange={(e) => {
              this.setState({ rating: e.target.value });
            }}
          />
          <br />
          <br />
          <input
            type="Email"
            Name="email"
            value={this.state.email}
            placeholder="Restaurant Email"
            onChange={(e) => {
              this.setState({ email: e.target.value });
            }}
          />
          <br />
          <br />
          <button
            type="button"
            onClick={() => {
              this.Update();
            }}
          >
            Update Restaurant
          </button>
        </div>
      </div>
    );
  }
}
