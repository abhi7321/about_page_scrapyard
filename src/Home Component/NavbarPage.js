import React from 'react';



import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

export default class NavbarPage extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div  >
        <Navbar color="warning" light expand="md">
          <NavbarBrand href="/">Home</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/components/About.js">About</NavLink>
              </NavItem>
              <NavItem>
                {/* Contact */}
                 <NavLink href="/components/Contact.js">Contact</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Services
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Individual
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem >
                    Society
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Industry
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <DropdownItem>

              </DropdownItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}