import React from "react";
import { Link } from "react-router-dom";
import { BsTruck, BsBoxSeam, BsPersonCheck } from "react-icons/bs";

const NavBar = () => {
    return (
        <nav className="navBar">
            <ul className="navBar-menu">
                <li>
                    <a href="#services">Services</a>
                </li>
                <li>
                    <a href="#materiels">Materiels</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;
