import React from "react";
import { Link } from "react-router-dom";

const ErrPage = () => {
    return (
        <div className="errorPage">
            <h2>Erreur 404</h2>
            <Link to="/#services"> Retour sur le site </Link>
        </div>
    );
};

export default ErrPage;
