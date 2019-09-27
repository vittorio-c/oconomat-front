/* import './style.sass' */
import React from 'react';


/* Import du fichier Sass */
import './style.sass'
const Objectives = () => {
    return (
        <main>
            <div className ="main-frame">
                <ObjectivesForm />
            </div>
        </main>
    )
}

const ObjectivesForm = () => (
    <div>
    <h2 className="pt-4 text-center">Mes objectifs</h2>
    <form>
  <div className="form-group row pt-4">
    <div className="col-sm-10">
      <input type="email" className="form-control form-control-sm" id="colFormLabelLg" placeholder="Votre budget à la semaine en €"/>
      <button className='btn btn-block mt-4 ' >Valider</button>
    </div>
    
  </div>
</form>

    </div>
)

export default Objectives ;