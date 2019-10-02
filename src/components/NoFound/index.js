import React from 'react';

import Footer from 'src/components/Footer';

const NoFound = () => {
    return(
        <div>
            <h2 className="pt-4 pb-4 text-center font-weight-bolder text-warning display-4">Page not found</h2>
            <a type='button' href='/' className='btn btn-success btn-block'>Go Back</a>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default NoFound ;