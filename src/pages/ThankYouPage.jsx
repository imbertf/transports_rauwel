import React from "react";
import { Link } from "react-router-dom";

const ThankYouPage = () => {
    return (
        <div className="thankYouPage">
            <h2>
                Merci d'avoir pris le temps de contacter Transports{" "}
                <span>Rauwel</span> !
            </h2>
            <p>
                Votre devis est en cours de réalisation, je reviendrais vers
                vous rapidement.
            </p>
            <Link to="/#services"> Retour vers la page principale </Link>
        </div>
    );
};

export default ThankYouPage;
