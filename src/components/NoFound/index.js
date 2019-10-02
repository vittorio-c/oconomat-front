import React from 'react';

const NoFound = () => {
    return(
        <div>
            <h2 className="pt-4 pb-4 text-center font-weight-bolder text-warning display-4">Page not found</h2>
            <a type='button' href='/' className='btn btn-success btn-block'>Go Back</a>
        </div>
    )
}

export default NoFound ;