import React from 'react';
import { Navbar } from 'react-bootstrap';

const Header = () => {

    const navStyle = {
        backgroundColor: '#9d1a2f', // Set the background color
        color: 'white', // Set the text color
    };

    return (
        <Navbar style={navStyle} variant="dark">
            <Navbar.Brand>React test app</Navbar.Brand>
        </Navbar>
    );
};

export default Header;
