import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faList,
  faPlus,
  faSearch,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

export default class NavbarMenu extends Component {
  render() {
    return (
      <div>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="/">SamInfo-Restaurant </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/">
                <FontAwesomeIcon icon={faHome} />
                Home
              </Nav.Link>
              <Nav.Link href="/List">
                <FontAwesomeIcon icon={faList} />
                List
              </Nav.Link>
              <Nav.Link href="/Create">
                <FontAwesomeIcon icon={faPlus} />
                Create
              </Nav.Link>
              <Nav.Link href="/Search">
                <FontAwesomeIcon icon={faSearch} />
                Search
              </Nav.Link>
              {localStorage.getItem("login") ? (
                <Nav.Link href="/Logout">
                  <FontAwesomeIcon icon={faUser} />
                  Log Out
                </Nav.Link>
              ) : (
                <Nav.Link href="/Login">
                  <FontAwesomeIcon icon={faUser} />
                  Log In
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
