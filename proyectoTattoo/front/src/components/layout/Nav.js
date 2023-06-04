import React from "react";
import { Link } from "react-router-dom";

const Nav = (props) => {
    return (
        <nav>
            <div>
                <ul class="holder">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/sobremi">Sobre Mi</Link></li>
                    <li><Link to="/trabajos">Trabajos</Link></li>
                    <li><Link to="/informacion">Informacion</Link></li>
                    <li><Link to="/contactanos">Contactanos</Link></li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;