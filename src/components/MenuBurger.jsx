import React, { useState } from "react";
import { CgMenu, CgMenuMotion } from "react-icons/cg";

const MenuBurger = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="menu-burger" onClick={toggleMenu}>
            <div className={isOpen ? "is-active" : ""}>
                <CgMenu className={isOpen ? "hide" : ""} />
                <CgMenuMotion className={isOpen ? "" : "hide"} />
                <nav className={isOpen ? "is-active" : "hide"}>
                    <ul className="menu-burger-navbar">
                        <li>
                            <a href="#services">services</a>
                        </li>
                        <li>
                            <a href="#materiels">materiels</a>
                        </li>
                        <li>
                            <a href="#contact">contact</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default MenuBurger;
