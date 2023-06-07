import React from "react";
import '../../styles/layout/header.css';

const Header = (props) => {
    return (
        <header>
            <div className="holder">
                <div className="logo">
                    <img src="img/AV.png" width="150px" alt="marbTATTOO" />
                    <h1>MarbTattoo<br />Design</h1>
                </div>
            </div>
        </header>
    );
}

export default Header;