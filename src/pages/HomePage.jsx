import React from "react";
import ContactForm from "../components/ContactForm";
import Card from "../components/Card";
import {
    BsTruck,
    BsBoxSeam,
    BsPersonCheck,
    BsTelephone,
    BsPen,
    BsClipboardCheck,
    BsDiagram2,
    BsSignpost2,
    BsCalendarDate,
    BsCheckCircle,
    BsInfoSquare,
} from "react-icons/bs";
import { RxEnvelopeClosed } from "react-icons/rx";
import camionPicture from "../pictures/camion.png";
import materielPicture from "../pictures/materiel.png";
import transpalettePicture from "../pictures/transpalette.png";
import profilPicture from "../pictures/profil.png";
import ivecoPicture from "../pictures/iveco.png";
import ButtonCallToAction from "../components/ButtonCallToAction";

const HomePage = () => {
    return (
        <div className="homePage">
            <div className="homePage-contactForm-container">
                <ContactForm />
            </div>
            <a name="services" />
            <div className="homePage-services">
                <div className="homePage-services-wrapper">
                    <Card
                        icon={<BsTruck />}
                        title={"Transport de marchandises"}
                        text={
                            "Vous avez besoin de livrer des palettes ou du materiel?  Contactez Transports Rauwel et recevez un devis gratuit. Livraison en temps avec une capacité de transport de 8 palettes 80xm x 120cm ou 20m³ sur toute la France. L'aide au chargement est comprise dans l'offre"
                        }
                    />
                    <Card
                        icon={<BsBoxSeam />}
                        title={"Déménagement"}
                        text={
                            "Déménagement éfficace, rapide et personalisé. J'effectue les déménagements sur l'ensemble de la France. Deux offres disponibles: Standard ou Premium. Avec l'offre Premium deux personnes supplémentaires seront la pour vous aider"
                        }
                    />
                    <Card
                        icon={<BsPersonCheck />}
                        title={"Location de véhicule avec chauffeur"}
                        text={
                            "La meilleure offre si vous souhaitez uniquement livrer du materiel sans aide au chargement"
                        }
                    />
                </div>
                <ButtonCallToAction />
            </div>

            <div className="homePage-materiel">
                <a name="materiels" />
                <h2>Materiel disponibles pour tous les services</h2>
                <p>Comment ça marche ?</p>
                <div className="homePage-materiel-process">
                    <ul>
                        <li>
                            <div>
                                <BsPen />
                            </div>
                            <span>1</span>
                            <p>Remplissez le formulaire</p>
                        </li>
                        <li>
                            <div>
                                <BsClipboardCheck />
                            </div>
                            <span>2</span>
                            <p>Choisissez le type de service</p>
                        </li>
                        <li>
                            <div>
                                <BsDiagram2 />
                            </div>
                            <span>3</span>
                            <p>
                                Les options, avec ou sans materiel
                                supplémentaire
                            </p>
                        </li>
                        <li>
                            <div>
                                <BsSignpost2 />
                            </div>
                            <span>4</span>
                            <p>Renseignez votre trajet</p>
                        </li>
                        <li>
                            <div>
                                <BsCalendarDate />
                            </div>
                            <span>5</span>
                            <p>La date</p>
                        </li>
                        <li>
                            <div>
                                <BsCheckCircle />
                            </div>
                            <span>6</span>
                            <p>Devis en cours de réalisation</p>
                        </li>
                    </ul>
                </div>
                <div className="homePage-materiel-wrapper">
                    <div className="materiel-card">
                        <div className="materiel-card-img">
                            <img
                                src={camionPicture}
                                alt="Camion Iveco 7,5 tonness"
                            />
                        </div>
                        <div className="materiel-card-title">
                            <h3>Iveco 7,5T</h3>
                            <a href="#capacites">
                                <BsInfoSquare />
                            </a>
                        </div>
                    </div>
                    <div className="materiel-card">
                        <div className="materiel-card-img">
                            <img
                                src={materielPicture}
                                alt="Diable et couvertures pour déménagement, chargement et déchargement"
                            />
                        </div>
                        <h3 className="materiel-card-title">
                            Diable et couvertures
                        </h3>
                    </div>
                    <div className="materiel-card">
                        <div className="materiel-card-img">
                            <img
                                src={transpalettePicture}
                                alt="Transpalette manuel"
                            />
                        </div>
                        <h3 className="materiel-card-title">Transpalette</h3>
                    </div>
                </div>
                <ButtonCallToAction />
            </div>

            <div className="homePage-transport">
                <a name="capacites" />

                <h3>Caractéristiques techniques</h3>
                <div className="homePage-transport-content">
                    <div className="homePage-transport-content-img">
                        <img
                            src={ivecoPicture}
                            alt="Camion Iveco 20m3 pour le transport de marchadises et déménagements"
                        />
                    </div>
                    <div className="homePage-transport-content-txt">
                        <p>Iveco 20m3</p>
                        <h4>Ouverture de caisse</h4>
                        <ul>
                            <li>Longueur 4.20cm</li>
                            <li>Largeur 1.95cm</li>
                            <li>Hauteur 2.20cm</li>
                        </ul>
                        <h4>Capacité</h4>
                        <ul>
                            <li>20m³</li>
                            <li>8 Palettes 80 x 120 au sol</li>
                            <li>Hayon</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="homePage-contact">
                <a name="contact" />
                <div className="homePage-contact-profil">
                    <div className="homePage-contact-profil-img">
                        <img
                            src={profilPicture}
                            alt="Guillaume Rauwel, Transports Rauwel à Lille"
                        />
                    </div>
                    <div className="homePage-contact-profil-presentation">
                        <h3>
                            Guillaume <span>Rauwel</span>
                        </h3>
                        <p>
                            Je suis Guillaume, responsable de Transports
                            <span> Rauwel </span>
                            et je suis là pour mettre à votre disposition mon
                            expertise.
                            <br /> Au travers de mon entreprise et de mes
                            services vous retrouverez{" "}
                            <span>19 ans d'expérience</span> dans la{" "}
                            <span>logistique </span>
                            et le <span>transport</span>. Experience acquise
                            dans des entreprises tel que Amazon.
                        </p>
                    </div>
                    <div className="homePage-contact-profil-contact">
                        <div className="homePage-contact-profil-contact-icon">
                            <BsTelephone />
                        </div>
                        <p>0604176207</p>
                        <div className="homePage-contact-profil-contact-icon">
                            <RxEnvelopeClosed />
                        </div>
                        <p>transports.rauwel@hotmail.com</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
