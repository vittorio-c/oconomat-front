import React from 'react';
import { Button,Nav,Navbar } from 'react-bootstrap';


const HeaderSuper =() =>{
    return  <div className="Header sticky-top">

        <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">Oconomat</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className ='clearfix'>

            <Nav  className="mr-auto">
                <Nav.Link href="/">Accueil</Nav.Link>
                <Nav.Link href="/account">Mon compte</Nav.Link>
                <Nav.Link href="/objectives">Mes objectifs</Nav.Link>
                <Nav.Link href="/recipes">Mes recettes</Nav.Link>
                <Nav.Link href="/MarketList">Ma liste de course</Nav.Link>
                <Nav.Link href="/recipe">Mes recettes</Nav.Link>
                <Nav.Link href="/contact">Contact</Nav.Link>
                
                <div  className ='btn-group text-center align-bottom float-right'>
                        <Nav.Link href="/signup"><Button className='btn btn-sm' variant="outline-success">Inscription</Button></Nav.Link>
                        <Nav.Link href="/signin"><Button className='btn btn-sm' variant="outline-success">Connexion</Button></Nav.Link>
                        <Nav.Link href="/"><Button className='btn btn-sm' variant="outline-danger">Déconnexion</Button></Nav.Link> 
                </div>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
    </div>         
} 
/* informations from Bootstrap's documentation 
https://getbootstrap.com/docs/4.3/components/buttons/
*/
export default HeaderSuper;