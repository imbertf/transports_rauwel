import React from "react";

const Card = ({ icon, title, text }) => {
    return (
        <div className="card">
            <div className="card-icon">{icon}</div>
            <h2 className="card-title">{title}</h2>
            <p className="card-text">{text}</p>
        </div>
    );
};

export default Card;
