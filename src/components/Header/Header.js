import { Avatar } from '@material-ui/core';
import React, { useContext } from 'react';
import { Button, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from '../../material/Logo.png';
import './Header.css';
import handleSignOut from '../Login/loginManager'

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const handleLogout = () => {
        setLoggedInUser({});
    }
    return (
        <Navbar className="header" bg="" variant="light">
            <Navbar.Brand href="/home">
                <img
                    src={logo}
                    width="100"
                    height="50"
                    className="d-inline-block align-top mr-5"
                    alt="React Bootstrap logo"
                />
            </Navbar.Brand>
            <Form inline>
                <FormControl type="text" placeholder="Search your destination" className="src-field mr-sm-2" />
            </Form>
            <Nav className="mr-auto">
                <Link className="nav-link" style={{color: 'black'}} to="/news">News</Link>
                <Link className="nav-link" style={{color: 'black'}} to="/booking">Booking</Link>
                <Link className="nav-link" style={{color: 'black'}} to="/hotel">Hotel</Link>
                <Link className="nav-link" style={{color: 'black'}} to="/blog">Blog</Link>
                <Link className="nav-link" style={{color: 'black'}} to="/contact">Contact</Link>
                {loggedInUser.email && <span className="d-flex" style={{marginTop: '10px'}}><strong style={{margin: '10px 8px 0 0'}}>{loggedInUser.name}</strong><Avatar alt={loggedInUser.name} src={loggedInUser.photo} /></span>}
                {loggedInUser.email && <Button onClick={handleLogout} className="btn-login" style={{margin: '12px'}}>Logout</Button>}
                {!loggedInUser.email && <Link to="/login"><Button className="btn-login">Login</Button></Link>}
            </Nav>
        </Navbar>
    );
};

export default Header;