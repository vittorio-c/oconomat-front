/* import './style.sass' */
import React from 'react';

import Header from '../HeaderVisitor';
import Footer from 'src/components/Footer';

/* Import du fichier Sass */
import './style.sass'
const Objectives = () => {
    return (
        <main>
            <div className ="main-frame">
                <header>
                  <Header/>
                </header>

                <ObjectivesForm />
                <footer>
                  <Footer />
                </footer>
            </div>
        </main>
    )
}

const ObjectivesForm = () => (
    <div>
    
      <h2 className="text-center font-weight-bold text-warning">Mes objectifs</h2>
      <form>
        <div className="form-group row pt-4">
          <div className="col-sm-10">
            <input type="email" className="form-control form-control-sm" id="colFormLabelLg" placeholder="Votre budget à la semaine en €"/>
            <button className='btn btn-block btn-success mt-4 mb-5'>Valider</button>
          </div> 
        </div>
      </form>
    </div>
)

export default Objectives ;