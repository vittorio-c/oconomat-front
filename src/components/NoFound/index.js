import React from 'react';

const NoFound = () => {
    return(
        <div>
            <h2 className="pt-4 pb-4 text-center font-weight-bolder text-warning">Vous vous êtes perdu, ou n'avez tout simplement pas accès à cette page , pas d'inquiètude, il suffit de vous inscrire ou de vous connecter :)</h2>
            <p className = 'pt-4 pb-4 text-center font-weight-bolder text-warning display-2' >404</p>
            <a type='button' href='/' className='btn btn-success btn-block'>Go Back</a>
        </div>
    )
}

export default NoFound ;