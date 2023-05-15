import React from "react";

const ContactForm = () => {
    return (
        <div className="wrapper">
            <a name="formulaire" />
            <form
                action="https://public.herotofu.com/v1/e977e080-f30f-11ed-b24a-93241516dd10"
                method="post"
                acceptCharset="UTF-8"
            >
                <fieldset>
                    <legend>Vous êtes ?</legend>
                    <div className="optionSelection">
                        <label htmlFor="type">Entreprise</label>
                        <input name="Type" id="type" type="radio" required />
                    </div>
                    <div className="optionSelection">
                        <label htmlFor="type">Particulier</label>
                        <input name="Type" id="type" type="radio" required />
                    </div>
                </fieldset>
                <div className="textWrapper">
                    <div className="textInput">
                        <label htmlFor="name">Nom</label>
                        <input name="Name" id="name" type="text" required />
                    </div>
                    <div className="textInput">
                        <label htmlFor="email">Email</label>
                        <input name="Email" id="email" type="email" required />
                    </div>
                    <div className="textInput">
                        <label htmlFor="tel">Tel</label>
                        <input name="Tel" id="tel" type="tel" required />
                    </div>
                </div>
                <fieldset>
                    <legend htmlFor="option">
                        De quel service avez-vous besoin?
                    </legend>
                    <div className="optionSelection">
                        <label htmlFor="service">
                            Transport de marchandises
                        </label>
                        <input
                            name="service"
                            id="service"
                            type="radio"
                            required
                        />
                    </div>
                    <div className="optionSelection">
                        <label htmlFor="service">Déménagement</label>
                        <input
                            name="service"
                            id="service"
                            type="radio"
                            required
                        />
                    </div>
                    <div className="optionSelection">
                        <label htmlFor="service">
                            Location de véhicule avec chauffeur
                        </label>
                        <input
                            name="service"
                            id="service"
                            type="radio"
                            required
                        />
                    </div>
                </fieldset>
                <div className="lieuSelectionWrapper">
                    <div className="lieuSelection">
                        <label htmlFor="lieuDepart">Ville de départ</label>
                        <input
                            name="lieuDepart"
                            id="lieuDepart"
                            type="lieu"
                            required
                        />
                        <label htmlFor="lieuDepart">Destination</label>
                        <input
                            name="lieuArrivee"
                            id="lieuArrivee"
                            type="lieu"
                            required
                        />
                    </div>
                </div>
                <div className="materielSelectionWrapper">
                    <div className="materielSelection">
                        <label htmlFor="materiel">Diable</label>
                        <input name="materiel" id="materiel" type="checkbox" />
                    </div>
                    <div className="materielSelection">
                        <label htmlFor="materiel">Couvertures</label>
                        <input name="materiel" id="materiel" type="checkbox" />
                    </div>
                    <div className="submitButton">
                        <input type="submit" value="Envoyer" />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default ContactForm;
