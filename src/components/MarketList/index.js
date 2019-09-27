/* import './style.sass' */
import React from 'react';


const MarketList = () => {
    return (
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
            </div>
        </main>
    )
}

export default MarketList ;