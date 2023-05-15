import React from "react";
import { Link } from "react-router-dom";
import { BsTelephone, BsLaptop } from "react-icons/bs";
import { RxEnvelopeClosed } from "react-icons/rx";

const Footer = () => {
    return (
        <div className="footer">
            <a name="contact" />
            <div className="footer-wrapper">
                <div className="footer-contact">
                    <h3>
                        Transport <span>Rauwel</span>
                    </h3>
                    <a href="tel:0604176207">
                        <BsTelephone />
                        0604176207
                    </a>
                    <a href="mailto:transports.rauwel@hotmail.com">
                        <RxEnvelopeClosed />
                        transports.rauwel@hotmail.com
                    </a>
                </div>
                <div className="footer-webDeveloper">
                    <p>
                        Web site created by <span>©️imbertf</span>
                    </p>
                    <a href="mailto:f.imbert4@gmail.com">
                        {" "}
                        <RxEnvelopeClosed />
                        f.imbert4@gmail.com
                    </a>
                    <Link
                        to={"https://imbertf.fr/"}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <BsLaptop />
                        www.imbertf.fr
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Footer;
