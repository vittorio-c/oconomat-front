import React from 'react';
import { Button,FormControl,Form,Nav,Navbar,NavDropdown, } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import './HeaderSuper.sass';

const HeaderSuper =() =>{
    return  <div className="Header sticky-top">

        <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">Oconomat</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">

            <Nav className="mr-auto">
                <Nav.Link href="/">Accueil</Nav.Link>
                <Nav.Link href="/account">Mon compte</Nav.Link>
                <Nav.Link href="/objectives">Mes objectifs</Nav.Link>
                <Nav.Link href="/recipes">Mes recettes</Nav.Link>
                <Nav.Link href="/MarketList">Ma liste de course</Nav.Link>
                <Nav.Link href="/recipe">Mes recettes</Nav.Link>
                <Nav.Link href="/signup">S'inscrire</Nav.Link>
                <Nav.Link href="/contact">Contact</Nav.Link>
                
            </Nav>
            <div className ='float-right text-center'>
                    <Nav.Link href="/"><Button className='btn btn-center' variant="outline-danger">Déconnexion</Button></Nav.Link>
                    <Nav.Link href="/signin"><Button className='btn btn-center' variant="outline-success">Connexion</Button></Nav.Link>
            </div>
            
        </Navbar.Collapse>
        </Navbar>
    </div>         
} 
/* informations from Bootstrap's documentation 
https://getbootstrap.com/docs/4.3/components/buttons/
*/
export default HeaderSuper;