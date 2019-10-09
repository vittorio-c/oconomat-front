import React from 'react';

const NoFound = () => {
    if (sessionStorage.jwtToken === '' || sessionStorage.jwtToken === undefined ){
    return(
        <div>
            <h2 className="pt-4 pb-4 text-center font-weight-bolder text-warning">
            Vous vous êtes perdu, ou n'avez tout simplement pas accès à cette page , pas d'inquiètude, il suffit de vous inscrire ou de vous connecter :</h2>
            <p className = 'pt-4 pb-4 text-center font-weight-bolder text-warning display-2' >404</p>
            <a type='button' href='/' className='btn btn-success btn-block'>Go Back</a>
        </div>
    )
    } else {
        return(
            <div>
                <p className = 'pt-4 pb-4 text-center font-weight-bolder text-warning display-4'>loading</p>
                <p className = 'pt-4 pb-4 text-center font-weight-bolder text-warning display-4'>please</p>
                <p className = 'pt-4 pb-4 text-center font-weight-bolder text-warning display-4'>wait</p>


            </div>
        )
    }
}

export default NoFound ;