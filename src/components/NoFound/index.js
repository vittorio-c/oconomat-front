import React from 'react';

import './animation.sass'

const NoFound = () => {
    if (sessionStorage.jwtToken === '' || sessionStorage.jwtToken === undefined ){
    return(
        <div className='notFound'>
            <div className="notFound-404">
                <h1 className='title-404 pt-4 pb-4 text-center font-weight-bolder text-warning display-2'>
                    4
                    <span></span>
                    4
                </h1>
                <h2 className="pt-4 pb-4 text-center font-weight-bolder text-warning">
                Vous vous êtes perdu, ou n'avez tout simplement pas accès à cette page , pas d'inquiètude, il suffit de vous inscrire ou de vous connecter :</h2>
                <p className = 'pt-4 pb-4 text-center font-weight-bolder text-warning display-2' >404</p>
                <a type='button' href='/' className='btn btn-success btn-block'>Go Back</a>
            </div>
        </div>
    )
    } else {
        return(
            <div>
                <div class="wrap">
                <div class="loading">
                <div class="bounceball"></div>
                <div class="text">NOW LOADING, PLEASE WAIT</div>
                </div>
                </div>
            </div>
        )
    }
}



export default NoFound ;