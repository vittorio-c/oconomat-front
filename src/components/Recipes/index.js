import React from 'react';

import HeaderMyAccount from '../HeaderMyAccount';
import Footer from 'src/components/Footer';

import { BrowserRouter as Router, Route,Switch,Redirect, Link } from "react-router-dom";
import './Recipes.sass';
import Carousel from 'react-bootstrap/Carousel'

const Recettes=() => {
    return (
      <div className="container white">
      <header>
        <HeaderMyAccount />
      </header> 
      <LinkToUserPage/> 
      <main>
          
          
          
            <h2 className="col-sm-6 offset-sm-4 "> Liste de vos Recettes Pour la Semaine </h2>  
            
            <div className=" col-xs-12 col-md-8 offset-md-2 recipe-box">
            <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100 max-height"
              src="src/Images/pasta.jpg"
              
            />
            <Carousel.Caption>
              <h3 class="text-blue"> <a href="#"> Recipe Name (See Details) </a> </h3> 
              <button class="btn btn-primary">Check Off</button> 
              <p class="text-black">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 max-height"
              src="src/Images/pasta.jpg"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3 class="text-blue"> <a href="#"> Recipe Name (See Details) </a> </h3> 
              <button class="btn btn-primary"> Check Off </button>
              <p class="text-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 max-height"
              src="src/Images/steak2.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3 class="text-blue"> <a href="#"> Recipe Name (See Details) </a> </h3> 
              <button class="btn btn-primary"> Check Off </button>
              <p class="text-black">
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
    



            
            </div>

        
        
    </main>
    <footer>
      <Footer/>
    </footer>
    </div>
    )
} 


const LinkToUserPage =() => {
  return <div> <Link to="/Account"><button class="btn btn-primary col-md-3 offset-md-5 margin-top"> Retour A Mon Compte </button> </Link>  </div>
}

export default Recettes;
