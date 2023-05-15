import React from "react";
import Logo from "./Logo";
import MenuBurger from "./MenuBurger";
import NavBar from "./NavBar";

const Header = () => {
    return (
        <div className="header">
            <Logo />
            <h1 className="header-h1">
                Transports <span className="header-h1--red">Rauwel</span>
            </h1>
            <MenuBurger />
            <NavBar />
        </div>
    );
};

export default Header;
