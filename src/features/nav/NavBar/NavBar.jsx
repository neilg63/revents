import React, { Component } from "react";
import { Menu, Container, Button } from "semantic-ui-react";
import { NavLink, Link, withRouter } from "react-router-dom";
import SignedOutMenu from "../Menus/SignedOutMenu";
import SignedInMenu from "../Menus/SignedInMenu";
class NavBar extends Component {
  state = {
    authenticated: false
  };

  handleSignIn = () => {
    this.setState({
      authenticated: true
    });
  };

  handleSignOut = () => {
    this.setState({
      authenticated: false
    });
    this.props.history.push('/')
  };

  render() {
    const { authenticated } = this.state;

    return (
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item as={NavLink} to="/" header>
            <img src="/assets/logo.png" alt="logo" />
            Re-vents
          </Menu.Item>
          <Menu.Item as={NavLink} name="Events" to="/events" />
          <Menu.Item as={NavLink} name="Test" to="/test" />
          {authenticated && <Menu.Item as={NavLink} name="People" to="/people" />}
          {authenticated &&
          <Menu.Item>
            <Button
              as={Link}
              floated="right"
              positive
              inverted
              content="Create Event"
              to="/createEvent"
            />
          </Menu.Item>}
          {authenticated ? (
            <SignedInMenu signOut={this.handleSignOut} />
          ) : (
            <SignedOutMenu signIn={this.handleSignIn} />
          )}
        </Container>
      </Menu>
    );
  }
}

export default withRouter(NavBar);
