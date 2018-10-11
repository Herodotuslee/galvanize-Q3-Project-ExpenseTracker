import React, { Component } from "react";
import {
  Nav,
  NavItem,
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
  NavLink
} from "reactstrap";

class NavBarList extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
      <div>
        <Nav tabs>
          <NavItem>
            <NavLink href="/" active>
              MAIN
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/ShowAllItem">ALL GROCERIES</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/showdatepage">CHOOSE DATE</NavLink>
          </NavItem>
          <Dropdown nav isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            <DropdownToggle nav caret>
              CHART
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem href="/Piechart">Pie</DropdownItem>
              <DropdownItem divider />
              <DropdownItem href="/Barchart">Bar</DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <NavItem>
            <NavLink href="/charttime">MONTHLY</NavLink>
          </NavItem>
          {/* <NavItem>
            <NavLink href="/tree">TREE</NavLink>
          </NavItem> */}
        </Nav>
      </div>
    );
  }
}

export default NavBarList;
