import React from 'react';
import {Animated} from "react-animated-css";
import './NoFound.sass';

const NoFound = () => {
    if (sessionStorage.jwtToken === '' || sessionStorage.jwtToken === undefined ){
    return(
        <div className='notFound'>
            <Animated animationIn="fadeInLeft" animationOut="fadeOutRight" animationInDuration={2000} animationOutDuration={2000} isVisible={true}>
            <div className="notFound-404">
                <h1 className='title-404 pt-4 pb-4 text-center font-weight-bolder text-warning display-2'>
                    4
                    <div className="cookie"></div>
                    4
                </h1>
            </div>
            </Animated> 
            <div className="message-404">
            <Animated animationIn="fadeInRight" animationOut="fadeOutLeft" animationInDuration={2000} animationOutDuration={2000} isVisible={true}> 
                <h2 className="pt-4 pb-4 text-center font-weight-bolder text-warning">
                    Vous vous êtes perdu, ou n'avez tout simplement pas accès à cette page , pas d'inquiètude, il suffit de vous <a className="link-404" href="SignUp">Inscrire</a> ou de vous <a className="link-404" href="SignIn">Connecter</a>
                </h2>
             </Animated>
                <div className="button-class">
                    <Animated animationIn="fadeInUp" animationOut="fadeOutDown" animationInDuration={1000} animationOutDuration={1000} isVisible={true}>
                    <a href='/' className='btn-goback'>Go Back</a>
                    </Animated>
                </div>
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