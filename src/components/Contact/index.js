import React from 'react';
import {Animated} from "react-animated-css";
/* Import du fichier Sass */
import './Contact.sass'

// CODE 

const Contact = () => {
    return (
          <main>
            <div className="Site-content">
                <main className="main">
                    <Contactpage/>
                </main>
            </div>
        </main>
      
            
    )
} 


// The Contactpage const is called up in the page

const Contactpage = () => {
    return <div className ='contactpage-background'>
                <Animated animationIn="flipInX" animationOut="slideOutRight" animationInDuration={2000} animationOutDuration={2000} isVisible={true}>
                <div className="nomansland">
                    <div className="row justify-content-center contact-zone my-0">
                        <div className="col-12 col-md-6 container contact p-5">
                            <h1 className="col-12 contact-title">Nous contacter</h1>
                            <p className="mt-4"><strong>Email de contact</strong> : oconomat.fr@mrblackway.fr</p>
                            <p className="mt-4"><strong>Adresse </strong>: 25 avenue du 
                            <br/>Général Leclerc
                            <br/>75 008 Paris
                            </p>
                        </div>
                        <div className="col-12 col-md-6 container contact p-5">
                            <h1 className="col-12 contact-title">L'équipe</h1>
                            <div className="row justify-content-center">
                                <div className="photo-container m-1 rounded">
                                    <img className="photo-contact" src="src/ressources/pictures/robin.jpg"></img>
                                    <p className="mt-4"><strong>Product Owner</strong> : Robin Ollmann</p>
                                    <a href="https://www.linkedin.com/in/robin-ollmann-26a016a9/" target="_blank" className="btn btn-light mt-2">LinkedIn</a>
                                </div>
                                <div className="photo-container m-1 rounded">
                                    <img className="photo-contact" src="src/ressources/pictures/vittorio.jpg"></img>
                                    <p className="mt-4"><strong>Scrum master</strong> : Vittorio Chillemi</p>
                                    <a href="https://www.linkedin.com/in/vittorio-chillemi/" target="_blank" className="btn btn-light mt-2">LinkedIn</a>
                                </div>
                                <div className="photo-container m-1 rounded">
                                    <img className="photo-contact" src="src/ressources/pictures/jerome.jpg"></img>
                                    <p className="mt-4"><strong>Technical referent</strong> : Jérôme Mesic</p>
                                    <a href="https://www.linkedin.com/in/jerome-mesic-2b27a5192/" target="_blank" className="btn btn-light mt-2">LinkedIn</a>
                                </div>
                                <div className="photo-container m-1 rounded">
                                    <img className="photo-contact" src="src/ressources/pictures/reuben.jpg"></img>
                                    <p className="mt-4"><strong>Lead dev front</strong> : Reuben Chouraki</p>
                                    <a href="https://www.linkedin.com/in/reuben-chouraki-87593810a/" target="_blank" className="btn btn-light mt-2">LinkedIn</a>
                                </div>
                                <div className="photo-container m-1 rounded">
                                    <img className="photo-contact" src="src/ressources/pictures/nnew.jpg"></img>
                                    <p className="mt-4"><strong>Lead dev back</strong> : Joffrey Cormont</p>
                                    <a href="https://www.linkedin.com/in/joffrey-cormont-6359b7175/" target="_blank" className="btn btn-light mt-2">LinkedIn</a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                </Animated>
            </div>
}
export default Contact;