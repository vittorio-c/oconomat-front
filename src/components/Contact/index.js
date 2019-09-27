/* import './style.sass' */
import React from 'react';
/* Import du fichier Sass */
import './Contact.sass'
import "~rfs/scss";

const Contact = () => {
    return (
        <main>
            <div className ='food-image img-thumbnail mt-3'>
                <div className="contact-zone">
                    <div className = "in-image-text">
                        <h2 className='m-3'>Nous Contacter</h2>
                         <div className="mail-adress">
                            contact@Oconomat.com
                        </div>
                        <div className="postal-adress">
                            Oconomat <br/>
                            23 rue du General Leclerc <br/>
                            75 008 Paris <br/>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}


export default Contact;