import { FormLogin } from "components/forms/FormLogin";
import { FormRegister } from "components/forms/FormRegister";
import React from "react";
import "../components/card.scss";

export const StartPage: React.FC = () => {
  return (
    <main className="main">
      <div className="card-container">
        <div className="card">
          <div className="card__front">
            <FormLogin />
          </div>
          <div className="card__back">
            <FormRegister />
          </div>
        </div>
      </div>
    </main>
  );
};
