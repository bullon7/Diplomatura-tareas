import React from "react";
import { NavLink } from "react-router-dom";
import '../../styles/layout/nav.css';

const Nav = (props) => {
    return (
        <nav>
            <div>
                <ul class="holder">
                    <li><NavLink to="/" className={({isActive}) => isActive ? "activo" : undefined }>Home</NavLink></li>
                    <li><NavLink to="/sobremi" className={({isActive}) => isActive ? "activo" : undefined }>Sobre Mi</NavLink></li>
                    <li><NavLink to="/promociones" className={({isActive}) => isActive ? "activo" : undefined }>Promociones</NavLink></li>
                    <li><NavLink to="/informacion" className={({isActive}) => isActive ? "activo" : undefined }>Informacion</NavLink></li>
                    <li><NavLink to="/contactanos" className={({isActive}) => isActive ? "activo" : undefined }>Contactanos</NavLink></li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;