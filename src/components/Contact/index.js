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
                    <div className="row justify-content-center contact-zone">
                        <div className="col-12 col-md-6 container contact p-5">
                            <h1 className="col-12 contact-title">Nous contacter</h1>
                            <p className="mt-4"><strong>Email de contact</strong> : oconomat.fr@mrblackway.fr</p>
                            <p className="mt-4"><strong>Adresse </strong>: 25 avenue du 
                            <br/>General Lecler
                            <br/>75 008 Paris
                            </p>
                        </div>
                        <div className="col-12 col-md-6 container contact p-5">
                            <h1 className="col-12 contact-title">L'équipe</h1>
                            <p className="mt-4"><strong>Product Owner</strong> : Robin Ollmann</p>
                            <p className="mt-4"><strong>Scrum master</strong> : Vittorio Chillemi</p>
                            <p className="mt-4"><strong>Technical referent</strong> : Jérôme Mesic</p>
                            <p className="mt-4"><strong>Lead dev front</strong> : Reuben Chouraki</p>
                            <p className="mt-4"><strong>Lead dev back</strong> : Joffrey Cormont</p>
                        </div>
                    </div>
                </div>
                </Animated>
            </div>
}
export default Contact;