import React from 'react';
import { BrowserRouter as Router, Route, Link,Redirect} from "react-router-dom";

const MaPageObjectifs=() => {
    return (<div> 
        <Link to="/objectifs"> Definir vos Objectis </Link>
        <Route path="/objectifs" Component={Objectifs}/>
        </div>)
} 

const Objectifs = () => {
    return (<form>
        <label for="budget"> Definir mon budget par semaine </label>
        <input type="text" name="budget"/> 
        </form>)
} 

export default MaPageObjectifs;