/* import './style.sass' */
import React from 'react';

import Header from '../HeaderVisitor';
import Footer from 'src/components/Footer';

const MarketList = () => {
    return (
        <div>
        <header>
            <Header />
        </header>
        <main>
            <div className ="main-frame">
                <h2 className="pt-4 pb-4 text-center font-weight-bolder text-warning">Ma liste de course</h2>
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
                    <th scope="row" className ='align-middle'>1</th>
                    <td className= 'align-middle'>Blanc de dinde</td>
                    <td className= 'align-middle'><span className= 'font-weight-bold'>500</span> grammes</td>
                    <td><button className="aling-middle btn btn-success btn-lg btn-block fa fa-check-square"/></td>
                    </tr>
                    <tr>
                    <th scope="row" className ='align-middle'>2</th>
                    <td className= 'align-middle'>Courgette</td>
                    <td className='align-middle'><span className='font-weight-bold'>2</span> pièces</td>
                    <td><button className="aling-middle btn btn-success btn-lg btn-block fa fa-check-square"/></td>
                    </tr>
                    <tr>
                    <th scope="row" className='align-middle'>3</th>
                    <td className= 'align-middle'>Eau</td>
                    <td className='align-middle'><span className= 'font-weight-bold'>1,5</span> kg</td>
                    <td><button className="aling-middle btn btn-success btn-lg btn-block fa fa-check-square"/></td>
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