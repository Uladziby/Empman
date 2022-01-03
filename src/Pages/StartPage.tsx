import React from "react";
import "../components/card.scss";

export const StartPage : React.FC = ()=>{
    return(
        <main className="main">
            <div className="card-container">
                <div className="card">
                    <div className="card__front"></div>
                    <div className="card__back"></div>
                </div>
            </div>
        </main>
    )
}