import { MDBCollapse, MDBDropdown, MDBDropdownItem, MDBDropdownMenu, MDBDropdownToggle, MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBNavItem } from 'mdbreact';
import React from 'react';
import { Link } from 'react-router-dom';

function MainHeaderCompo(props) {
    const MenuData = { "/": "Home", "/about": "About Us", "/contact": "Contact Us", "/login": "SignIn", "/allusers": "All Users","/allusersdata": "All Users Data" }
    let MyMenu = Object.entries(MenuData).map(([ky, val], i) => {
        return <MDBNavItem key={i}>
            <Link className='nav-link' to={ky}>{val}</Link>
        </MDBNavItem>
    })
    return (
        <>
            <MDBNavbar color="indigo" dark expand="md">
                <MDBNavbarBrand>
                    <strong className="white-text">Navbar</strong>
                </MDBNavbarBrand>
                <MDBNavbarToggler />
                <MDBCollapse id="navbarCollapse3" navbar>
                    <MDBNavbarNav left>
                        {/* <MDBNavItem>
                            <a className='nav-link' href=""> test</a>
                        </MDBNavItem> */}
                        {MyMenu}
                        <MDBNavItem>
                            <MDBDropdown>
                                <MDBDropdownToggle nav caret>
                                    <span className="mr-2">Dropdown</span>
                                </MDBDropdownToggle>
                                {/* <MDBDropdownMenu>
                                    <MDBDropdownItem href="#!">Action</MDBDropdownItem>
                                    <MDBDropdownItem href="#!">Another Action</MDBDropdownItem>
                                    <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                                    <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                                </MDBDropdownMenu> */}
                                
                            </MDBDropdown>
                        </MDBNavItem>
                    </MDBNavbarNav>
                    <MDBNavbarNav right>
                        <MDBNavItem>
                            <div className="md-form my-0">
                                <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
                            </div>
                        </MDBNavItem>
                    </MDBNavbarNav>
                </MDBCollapse>
            </MDBNavbar>
        </>
    );
}

export default MainHeaderCompo;