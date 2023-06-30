import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

const Header = () => {
	return (
		<>
			<Navbar expand='lg' className='bg-body-tertiary'>
				<Container>
					<NavLink to='/' style={{ textDecoration: 'none' }}>
						<Navbar.Brand as='div' >
							SOTNIKOV
						</Navbar.Brand>
					</NavLink>
					<Navbar.Toggle aria-controls='basic-navbar-nav' />
					<Navbar.Collapse id='basic-navbar-nav'>
						<Nav className='me-auto'>
							<NavLink to="/posts" end style={{ textDecoration: 'none' }}>
								<Nav.Link as={'li'} >Posts</Nav.Link>
							</NavLink>
							<NavLink to="/photos" end style={{ textDecoration: 'none' }}>
								<Nav.Link as={'li'} >Photos</Nav.Link>
							</NavLink>

							<Nav.Link href='#link'>Tasks</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar >
		</>
	);
};

export default Header;
