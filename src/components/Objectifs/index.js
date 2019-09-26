import React from 'react';
import { BrowserRouter as Router, Route, Link,Redirect} from "react-router-dom";



const Objectifs = () => {
    return (<form> 
        <label htmlFor = "budget"> Definir mon budget par semaine </label>
        <input type="text" name="budget"/> 
        </form>)
} 

export default Objectifs;