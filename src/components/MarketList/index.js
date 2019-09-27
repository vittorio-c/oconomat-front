/* import './style.sass' */
import React from 'react';

import Header from '../Header/index.js';
import Footer from 'src/components/Footer';

const MarketList = () => {
    return (
        <div>
        <header>
            <Header />
        </header>
        <main>
            <div className ="main-frame">
                <h2 className="pt-4 pb-4 text-center">Ma liste de course</h2>
                <table className="table ">
                <thead className="thead-light">
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nom</th>
                    <th scope="col">Quantité</th>
                    <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">1</th>
                    <td>Blanc de dinde</td>
                    <td><span className= 'font-weight-bold'>500</span> grammes</td>
                    <td><button className="btn btn-success btn-sm fa fa-shopping-cart"/></td>
                    </tr>
                    <tr>
                    <th scope="row">2</th>
                    <td>Courgette</td>
                    <td><span className= 'font-weight-bold'>2</span> pièces</td>
                    <td><button className="btn btn-success btn-sm fa fa-shopping-cart"/></td>
                    </tr>
                    <tr>
                    <th scope="row">3</th>
                    <td>Eau</td>
                    <td><span className= 'font-weight-bold'>1,5</span> kg</td>
                    <td><button className="btn btn-success btn-sm fa fa-shopping-cart"/></td>
                    </tr>
                </tbody>
                </table>
                <button type="button" className="btn btn-danger btn-block" data-toggle="modal" data-target="#exampleModal">
                    Nettoyer votre liste
                </button>

                <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Etes vous sûr?</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                    Vous allez supprimer votre liste de course actuelle !
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Annuler</button>
                        <button type="button" className="btn btn-danger btn-block">Supprimer la liste</button>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </main>
        <footer>
            <Footer />
        </footer>
    </div>
        
    )
}

export default MarketList ;